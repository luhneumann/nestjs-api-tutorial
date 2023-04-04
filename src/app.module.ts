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


@Module({
  imports: [ 
    CitiesModule,
    StatesModule,    
    ProfessionsModule,
    AuthModule,   
    UserModule,    
    AccountModule,
    MongooseModule.forRoot('mongodb+srv://luanafneumann22:181500@cluster0.lun8ojy.mongodb.net/?retryWrites=true&w=majority'),
    AnimalsModule
  ],  
   controllers: [AppController],
   providers:[]
})
export class AppModule {}
