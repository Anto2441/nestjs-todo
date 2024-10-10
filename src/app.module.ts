import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { BrunoModule } from './bruno/bruno.module';

@Module({
  imports: [TodosModule, BrunoModule],
})
export class AppModule {}
