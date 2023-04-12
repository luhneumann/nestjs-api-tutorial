import { Test, TestingModule } from '@nestjs/testing';
import { ReprodutionTimeController } from './reprodution-time.controller';
import { ReprodutionTimeService } from './reprodution-time.service';

describe('ReprodutionTimeController', () => {
  let controller: ReprodutionTimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReprodutionTimeController],
      providers: [ReprodutionTimeService],
    }).compile();

    controller = module.get<ReprodutionTimeController>(ReprodutionTimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
