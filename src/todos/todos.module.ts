import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(TodosController);
  }
}
