import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Animal, AnimalSchema } from './entities/animal.entity';
import { LotsService } from 'src/lots/lots.service';
import { LotsModule } from 'src/lots/lots.module';
import { WeightControlModule } from 'src/weight-control/weight-control.module';
import { DewormingModule } from 'src/deworming/deworming.module';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
          name: Animal.name,
          schema: AnimalSchema
      }      
  ]),
  LotsModule,
  WeightControlModule,
  DewormingModule
  ],
  controllers: [AnimalsController],
  providers: [AnimalsService],
  exports:[AnimalsModule, AnimalsService]
})
export class AnimalsModule {}
