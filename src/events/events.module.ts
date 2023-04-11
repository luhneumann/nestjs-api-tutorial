import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from './entities/event.entity';

@Module({
  imports:[
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
