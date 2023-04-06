import { MongooseModule } from "@nestjs/mongoose";
import { StateSchema, State } from "./entities/states.entities";
import { StatesService } from "./states.service";
import { StatesController } from "./states.controller";
import { Module } from "@nestjs/common";

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: State.name,
                schema: StateSchema
            }
            
        ])
    ],
    controllers:[StatesController],
    providers: [StatesService],
    exports: [StatesModule, StatesService],
}) 
export class StatesModule {}
    