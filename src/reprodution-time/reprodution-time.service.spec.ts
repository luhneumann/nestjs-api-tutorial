import { Test, TestingModule } from '@nestjs/testing';
import { ReprodutionTimeService } from './reprodution-time.service';

describe('ReprodutionTimeService', () => {
  let service: ReprodutionTimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReprodutionTimeService],
    }).compile();

    service = module.get<ReprodutionTimeService>(ReprodutionTimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
