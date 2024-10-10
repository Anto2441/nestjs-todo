import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  private todos = [];
  getTodos() {
    return this.todos;
  }

  getTodo(todoId: string) {
    const todo = this.todos.find((todo) => todo.id === todoId);
    if (!todo) {
      throw new NotFoundException();
    }

    return todo;
  }

  createTodo(createTodoDto: CreateTodoDto) {
    const newTodo = {
      id: randomUUID(),
      title: createTodoDto.title,
    };
    this.todos.push(newTodo);

    return newTodo;
  }

  updateTodo(todoId: string, updateTodoDto: UpdateTodoDto) {
    const todo = this.getTodo(todoId);
    if (!todo) {
      throw new NotFoundException();
    }
    todo.title = updateTodoDto.title;

    return todo;
  }

  deleteTodo(todoId: string) {
    const todo = this.getTodo(todoId);
    if (!todo) {
      throw new NotFoundException();
    }

    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }
}
