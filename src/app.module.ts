import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TodosModule } from './todos/todos.module';
import todosConfig from './todos/config/todos.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [todosConfig] }),
    TodosModule,
  ],
})
export class AppModule {}
