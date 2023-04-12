import { Module } from '@nestjs/common';
import { ParturitionsService } from './parturitions.service';
import { ParturitionsController } from './parturitions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Parturition, ParturitionSchema } from './entities/parturition.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Parturition.name,
        schema: ParturitionSchema        
      }
    ])
  ],
  controllers: [ParturitionsController],
  providers: [ParturitionsService]
})
export class ParturitionsModule {}
