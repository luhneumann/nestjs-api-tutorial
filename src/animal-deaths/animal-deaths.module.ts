import { Module } from '@nestjs/common';
import { AnimalDeathsService } from './animal-deaths.service';
import { AnimalDeathsController } from './animal-deaths.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalDeath, AnimalDeathSchema } from './entities/animal-death.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:AnimalDeath.name,
        schema: AnimalDeathSchema
      }
    ])
  ],
  controllers: [AnimalDeathsController],
  providers: [AnimalDeathsService],
  exports: [AnimalDeathsService, AnimalDeathsModule]
})
export class AnimalDeathsModule {}
