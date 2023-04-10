import { Module } from '@nestjs/common';
import { DewormingService } from './deworming.service';
import { DewormingController } from './deworming.controller';

@Module({
  controllers: [DewormingController],
  providers: [DewormingService]
})
export class DewormingModule {}
