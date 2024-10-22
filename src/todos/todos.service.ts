import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import * as databaseSchema from 'src/database/database.schema';
import { DATABASE } from 'src/database/database.constants';

@Injectable()
export class TodosService {
  private todos = [];

  constructor(
    @Inject(DATABASE) private database: NodePgDatabase<typeof databaseSchema>,
  ) {}
  async getTodos() {
    try {
      return this.database.query.todos.findMany();
    } catch (error) {
      console.log(error);
    }
  }

  async getTodo(todoId: string) {
    // const todo = await this.database.query.todos.findFirst({
    //   where: eq(databaseSchema.todos.id, Number(todoId)),
    // });

    const [todo] = await this.database
      .select()
      .from(databaseSchema.todos)
      .where(eq(databaseSchema.todos.id, Number(todoId)));

    if (!todo) {
      throw new NotFoundException();
    }

    return todo;
  }

  async createTodo(createTodoDto: CreateTodoDto) {
    try {
      const rows = await this.database
        .insert(databaseSchema.todos)
        .values({
          title: createTodoDto.title,
        })
        .returning();

      return rows[0];
    } catch (error) {
      console.log(error);
    }
  }

  async updateTodo(todoId: string, updateTodoDto: UpdateTodoDto) {
    try {
      const updatedTodo = await this.database
        .update(databaseSchema.todos)
        .set({
          title: updateTodoDto.title,
        })
        .where(eq(databaseSchema.todos.id, Number(todoId)))
        .returning();

      return updatedTodo;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteTodo(todoId: string) {
    try {
      await this.database
        .delete(databaseSchema.todos)
        .where(eq(databaseSchema.todos.id, Number(todoId)));
    } catch (error) {
      console.log(error);
    }
  }
}
