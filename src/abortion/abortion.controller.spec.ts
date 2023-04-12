import { Test, TestingModule } from '@nestjs/testing';
import { AbortionController } from './abortion.controller';
import { AbortionService } from './abortion.service';

describe('AbortionController', () => {
  let controller: AbortionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbortionController],
      providers: [AbortionService],
    }).compile();

    controller = module.get<AbortionController>(AbortionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
