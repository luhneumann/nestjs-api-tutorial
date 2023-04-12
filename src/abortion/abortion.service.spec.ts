import { Test, TestingModule } from '@nestjs/testing';
import { AbortionService } from './abortion.service';

describe('AbortionService', () => {
  let service: AbortionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbortionService],
    }).compile();

    service = module.get<AbortionService>(AbortionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
