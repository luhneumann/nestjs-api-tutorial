import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AccountModule } from './account/account.module';
import { ProfessionsModule } from './professions/professions.module';
import { AnimalsModule } from './animals/animals.module';
import { CitiesModule } from './cities/cities.module';
import { StatesModule } from './states/states.module';
import { LotsModule } from './lots/lots.module';
import { FarmsModule } from './farm/farms.module';
import { ManagementsModule } from './managements/managements.module';
import { WeightControlModule } from './weight-control/weight-control.module';
import { VaccinationModule } from './vaccination/vaccination.module';
import { DewormingModule } from './deworming/deworming.module';
import { EventsModule } from './events/events.module';
import { MedicinesModule } from './medicines/medicines.module';
import { AnimalDeathsModule } from './animal-deaths/animal-deaths.module';
import { DiseaseModule } from './disease/disease.module';
import { ReprodutionTimeModule } from './reprodution-time/reprodution-time.module';
import { AbortionModule } from './abortion/abortion.module';
import { GestationsModule } from './gestations/gestations.module';
import { ParturitionsModule } from './parturitions/parturitions.module';
import { SalesModule } from './sales/sales.module';
import { IncomingsModule } from './incomings/incomings.module';
import { ExpensesModule } from './expenses/expenses.module';


@Module({
  imports: [     
    FarmsModule,
    CitiesModule,
    StatesModule,    
    ProfessionsModule,
    AuthModule,   
    UserModule,    
    AccountModule,
    MongooseModule.forRoot('mongodb+srv://luanafneumann22:181500@cluster0.lun8ojy.mongodb.net/?retryWrites=true&w=majority'),
    AnimalsModule,
    LotsModule,
    ManagementsModule,
    WeightControlModule,
    VaccinationModule,
    DewormingModule,
    EventsModule,
    MedicinesModule,
    AnimalDeathsModule,
    DiseaseModule,
    ReprodutionTimeModule,
    AbortionModule,
    GestationsModule,
    ParturitionsModule,
    SalesModule,
    IncomingsModule,
    ExpensesModule
  ],  
   controllers: [],
   providers:[]
})
export class AppModule {}
