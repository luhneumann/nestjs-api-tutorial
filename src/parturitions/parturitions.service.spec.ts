import { Test, TestingModule } from '@nestjs/testing';
import { ParturitionsService } from './parturitions.service';

describe('ParturitionsService', () => {
  let service: ParturitionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParturitionsService],
    }).compile();

    service = module.get<ParturitionsService>(ParturitionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
