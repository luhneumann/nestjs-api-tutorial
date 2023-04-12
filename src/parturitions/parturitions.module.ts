import { Module } from '@nestjs/common';
import { ParturitionsService } from './parturitions.service';
import { ParturitionsController } from './parturitions.controller';

@Module({
  controllers: [ParturitionsController],
  providers: [ParturitionsService]
})
export class ParturitionsModule {}
