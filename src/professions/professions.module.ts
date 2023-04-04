import { Module } from "@nestjs/common";
import { ProfessionsService } from "./professions.service";
import { Mongoose } from "mongoose";
import { MongooseModule } from "@nestjs/mongoose";
import { Profession, ProfessionSchema } from "./entities/professions.entities";
import { ProfessionsController } from "./professions.controller";

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: Profession.name,
                schema: ProfessionSchema
            }
            
        ])
    ],
    controllers:[ProfessionsController],
    providers: [ProfessionsService],
    exports: [ProfessionsModule, ProfessionsService],
}) 
export class ProfessionsModule {}
    
