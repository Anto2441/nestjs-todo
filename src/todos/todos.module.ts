import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { DatabaseModule } from 'src/database/database.module';
//import { LoggerMiddleware } from './middlewares/logger/logger.middleware';

@Module({
  controllers: [TodosController],
  imports: [DatabaseModule],
  providers: [TodosService],
})
export class TodosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //consumer.apply(LoggerMiddleware).forRoutes(TodosController);
  }
}
