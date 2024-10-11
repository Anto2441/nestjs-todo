import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TodosModule } from './todos/todos.module';
import { DatabaseModule } from './database/database.module';
import todosConfig from './todos/config/todos.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [todosConfig] }),
    TodosModule,
    DatabaseModule,
  ],
})
export class AppModule {}
