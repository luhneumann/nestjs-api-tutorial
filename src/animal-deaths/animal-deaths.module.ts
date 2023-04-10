import { Module } from '@nestjs/common';
import { AnimalDeathsService } from './animal-deaths.service';
import { AnimalDeathsController } from './animal-deaths.controller';

@Module({
  controllers: [AnimalDeathsController],
  providers: [AnimalDeathsService]
})
export class AnimalDeathsModule {}
