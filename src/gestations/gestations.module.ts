import { Module } from '@nestjs/common';
import { GestationsService } from './gestations.service';
import { GestationsController } from './gestations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gestation, GestationSchema } from './entities/gestation.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Gestation.name,
        schema: GestationSchema
      }
    ])
  ],
  controllers: [GestationsController],
  providers: [GestationsService]
})
export class GestationsModule {}
