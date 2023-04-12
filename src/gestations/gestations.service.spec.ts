import { Test, TestingModule } from '@nestjs/testing';
import { GestationsService } from './gestations.service';

describe('GestationsService', () => {
  let service: GestationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GestationsService],
    }).compile();

    service = module.get<GestationsService>(GestationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
