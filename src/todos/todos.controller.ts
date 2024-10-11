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
import { ConfigType } from '@nestjs/config';

import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ExampleGuard } from './guards/example.guard';
import { LoggerInterceptor } from './interceptors/logger/logger.interceptor';
import todosConfig from './config/todos.config';

@UseInterceptors(LoggerInterceptor)
@UseGuards(ExampleGuard)
@Controller('todos')
export class TodosController {
  constructor(
    private readonly todosService: TodosService,
    @Inject(todosConfig.KEY)
    private readonly config: ConfigType<typeof todosConfig>,
  ) {}

  @Get()
  getTodos() {
    console.log(this.config.database.port);
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
