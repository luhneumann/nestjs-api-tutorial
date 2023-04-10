import { Test, TestingModule } from '@nestjs/testing';
import { DewormingService } from './deworming.service';

describe('DewormingService', () => {
  let service: DewormingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DewormingService],
    }).compile();

    service = module.get<DewormingService>(DewormingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
