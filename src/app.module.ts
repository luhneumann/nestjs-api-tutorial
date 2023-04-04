import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';


@Module({
  imports: [ 
    AuthModule,   
    UserModule,
    BookmarkModule,
    MongooseModule.forRoot('mongodb+srv://luanafneumann22:181500@cluster0.lun8ojy.mongodb.net/?retryWrites=true&w=majority')
  ],  
   controllers: [AppController],
   providers:[]
})
export class AppModule {}
