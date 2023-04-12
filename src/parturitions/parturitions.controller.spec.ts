import { Test, TestingModule } from '@nestjs/testing';
import { ParturitionsController } from './parturitions.controller';
import { ParturitionsService } from './parturitions.service';

describe('ParturitionsController', () => {
  let controller: ParturitionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParturitionsController],
      providers: [ParturitionsService],
    }).compile();

    controller = module.get<ParturitionsController>(ParturitionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
