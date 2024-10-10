import { Test, TestingModule } from '@nestjs/testing';
import { BrunoService } from './bruno.service';

describe('BrunoService', () => {
  let service: BrunoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrunoService],
    }).compile();

    service = module.get<BrunoService>(BrunoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
