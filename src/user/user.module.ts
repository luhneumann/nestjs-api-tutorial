import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entities';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ProfessionsModule } from 'src/professions/professions.module';

@Module({
    imports: [        
        MongooseModule.forFeature([
        {
            name: User.name, 
            schema: UserSchema
        },
    ]), 
        ProfessionsModule,            
    ],
    controllers: [UserController],
    providers: [UserService],
    exports:[UserService, UserModule]
})
export class UserModule {}
