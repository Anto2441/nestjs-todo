import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

import todosConfig from './config/todos.config';

@Controller('todos')
export class TodosController {
  constructor(
    private readonly todosService: TodosService,
    @Inject(todosConfig.KEY)
    private readonly config: ConfigType<typeof todosConfig>,
  ) {}

  @Get()
  async getTodos() {
    const todos = await this.todosService.getTodos();

    return todos;
  }

  @Get(':todoId')
  getTodo(@Param('todoId') todoId: string) {
    return this.todosService.getTodo(todoId);
  }

  @Post()
  async createTodo(@Body() createTodoDto: CreateTodoDto) {
    const newTodo = await this.todosService.createTodo(createTodoDto);

    return newTodo;
  }

  @Patch(':todoId')
  updateTodo(
    @Param('todoId') todoId: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todosService.updateTodo(todoId, updateTodoDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':todoId')
  deleteTodo(@Param('todoId') todoId: string) {
    this.todosService.deleteTodo(todoId);
  }
}
