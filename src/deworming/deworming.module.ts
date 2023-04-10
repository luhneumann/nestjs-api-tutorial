import { Module } from '@nestjs/common';
import { DewormingService } from './deworming.service';
import { DewormingController } from './deworming.controller';
import { Deworming, DewormingSchema } from './entities/deworming.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Deworming.name,
        schema: DewormingSchema
      }
    ])
  ],
  controllers: [DewormingController],
  providers: [DewormingService]
})
export class DewormingModule {}
