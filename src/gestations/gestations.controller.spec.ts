import { Test, TestingModule } from '@nestjs/testing';
import { GestationsController } from './gestations.controller';
import { GestationsService } from './gestations.service';

describe('GestationsController', () => {
  let controller: GestationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestationsController],
      providers: [GestationsService],
    }).compile();

    controller = module.get<GestationsController>(GestationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
