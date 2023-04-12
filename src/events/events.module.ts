import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from './entities/event.entity';
import { AnimalDeathsModule } from 'src/animal-deaths/animal-deaths.module';
import { DiseaseModule } from 'src/disease/disease.module';

@Module({
  imports:[
    AnimalDeathsModule,
    DiseaseModule,
    MongooseModule.forFeature([
      {
        name: Event.name,
        schema: EventSchema
      }
    ])
  ],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService, EventsModule]
})
export class EventsModule {}
