import { Module } from '@nestjs/common';
import { LotsService } from './lots.service';
import { LotsController } from './lots.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Lot, LotsSchema } from './entities/lot.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
          name: Lot.name,
          schema: LotsSchema
      }  
    ]),
  ],
  controllers: [LotsController],
  providers: [LotsService, LotsModule]
})
export class LotsModule {}
