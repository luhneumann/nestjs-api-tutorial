import { Module } from '@nestjs/common';
import { ManagementsService } from './managements.service';
import { ManagementsController } from './managements.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Management, ManagementSchema } from './entities/management.entity';
import { MedicinesModule } from 'src/medicines/medicines.module';
import { EventsModule } from 'src/events/events.module';
import { VaccinationModule } from 'src/vaccination/vaccination.module';
import { DewormingModule } from 'src/deworming/deworming.module';
import { AnimalDeathsModule } from 'src/animal-deaths/animal-deaths.module';
import { WeightControlModule } from 'src/weight-control/weight-control.module';


@Module({
  imports:[
    EventsModule,
    VaccinationModule, 
    DewormingModule, 
    AnimalDeathsModule,   
    MedicinesModule, 
    WeightControlModule,         
    MongooseModule.forFeature([
      {
        name: Management.name,
        schema: ManagementSchema
      },
    ]),       
  ],
  controllers: [ManagementsController],
  providers: [ManagementsService],
  exports:[ManagementsModule, ManagementsService]
})
export class ManagementsModule {}
