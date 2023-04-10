import { Test, TestingModule } from '@nestjs/testing';
import { DewormingController } from './deworming.controller';
import { DewormingService } from './deworming.service';

describe('DewormingController', () => {
  let controller: DewormingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DewormingController],
      providers: [DewormingService],
    }).compile();

    controller = module.get<DewormingController>(DewormingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
