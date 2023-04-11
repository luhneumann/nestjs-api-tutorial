import { Module } from '@nestjs/common';
import { WeightControlService } from './weight-control.service';
import { WeightControlController } from './weight-control.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WeightControl, WeightControlSchema } from './entities/weight-control.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: WeightControl.name,
        schema: WeightControlSchema
      }
    ])
  ],
  controllers: [WeightControlController],
  providers: [WeightControlService],
  exports:[WeightControlService, WeightControlModule]
})
export class WeightControlModule {}
