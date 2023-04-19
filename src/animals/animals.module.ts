import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Animal, AnimalSchema } from './entities/animal.entity';
import { LotsService } from 'src/lots/lots.service';
import { LotsModule } from 'src/lots/lots.module';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
          name: Animal.name,
          schema: AnimalSchema
      }      
  ]),
  LotsModule
  ],
  controllers: [AnimalsController],
  providers: [AnimalsService],
  exports:[AnimalsModule, AnimalsService]
})
export class AnimalsModule {}
