import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import { BrunoModule } from 'src/bruno/bruno.module';
import { BrunoService } from 'src/bruno/bruno.service';

const name = 'Bruno';
const name2 = 'Jojo';

@Module({
  imports: [BrunoModule],
  controllers: [TodosController],
  providers: [
    TodosService,
    BrunoService,
    { provide: 'NAME_TOKEN', useValue: name2 },
  ],
})
export class TodosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(TodosController);
  }
}
