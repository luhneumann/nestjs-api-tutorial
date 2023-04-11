import { Module } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { MedicinesController } from './medicines.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Medicine, MedicineSchema } from './entities/medicine.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Medicine.name,
        schema: MedicineSchema
      }
    ]),
  ],
  controllers: [MedicinesController],
  providers: [MedicinesService, ],
  exports: [MedicinesModule, MedicinesService]
})
export class MedicinesModule {}
