import { Module } from '@nestjs/common';
import { AbortionService } from './abortion.service';
import { AbortionController } from './abortion.controller';

@Module({
  controllers: [AbortionController],
  providers: [AbortionService]
})
export class AbortionModule {}
