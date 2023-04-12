import { Module } from '@nestjs/common';
import { IncomingsService } from './incomings.service';
import { IncomingsController } from './incomings.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Incoming, IncomingSchema } from './entities/incoming.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Incoming.name,
        schema: IncomingSchema
      }
    ])
  ],
  controllers: [IncomingsController],
  providers: [IncomingsService]
})
export class IncomingsModule {}
