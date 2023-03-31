import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [    
    UserModule,
    BookmarkModule,
    MongooseModule.forRoot('mongodb+srv://luanafneumann22:181500@cluster0.lun8ojy.mongodb.net/?retryWrites=true&w=majority')
  ],  
   controllers: [],
   providers:[]
})
export class AppModule {}
