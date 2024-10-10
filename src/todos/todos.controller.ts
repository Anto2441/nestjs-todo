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
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ExampleGuard } from './guards/example.guard';
import { LoggerInterceptor } from './interceptors/logger/logger.interceptor';
import { BrunoService } from 'src/bruno/bruno.service';

@UseInterceptors(LoggerInterceptor)
@UseGuards(ExampleGuard)
@Controller('todos')
export class TodosController {
  constructor(
    private readonly todosService: TodosService,
    private readonly brunoService: BrunoService,
    @Inject('NAME_TOKEN')
    private readonly name: string,
  ) {}

  @Get()
  getTodos() {
    console.log(this.name);
    console.log(this.brunoService.example());
    return this.todosService.getTodos();
  }

  @Get(':todoId')
  getTodo(@Param('todoId') todoId: string) {
    return this.todosService.getTodo(todoId);
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.createTodo(createTodoDto);
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
