import { Module } from "@nestjs/common";
import { FarmsService } from "./farms.service";
import { FarmsController } from "./farms.controller";
import mongoose from "mongoose";
import { MongooseModule } from "@nestjs/mongoose";
import { Farm, FarmSchema } from "./entities/farm.entities";


@Module({
    imports:[           
        MongooseModule.forFeature([
            {
                name: Farm.name,
                schema: FarmSchema
            }
        ])
    ],
    providers: [FarmsService],
    controllers: [FarmsController],
    exports: [FarmsModule, FarmsService]
})

export class FarmsModule{} 