import { Module } from '@nestjs/common';
import { AbortionService } from './abortion.service';
import { AbortionController } from './abortion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Abortion, AbortionSchema } from './entities/abortion.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Abortion.name,
        schema: AbortionSchema
      }
    ])
  ],
  controllers: [AbortionController],
  providers: [AbortionService]
  
})
export class AbortionModule {}
