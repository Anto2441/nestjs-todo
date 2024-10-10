import { Test, TestingModule } from '@nestjs/testing';
import { BrunoController } from './bruno.controller';
import { BrunoService } from './bruno.service';

describe('BrunoController', () => {
  let controller: BrunoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrunoController],
      providers: [BrunoService],
    }).compile();

    controller = module.get<BrunoController>(BrunoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
