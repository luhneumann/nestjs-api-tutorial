import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Cities, CitiesSchema } from "./entities/cities.entities";
import { CitiesController } from "./cities.controller";
import { CitiesService } from "./cities.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Cities.name,
                schema: CitiesSchema
            }
            
        ]),
    ],
    controllers: [CitiesController],
    providers: [CitiesService],
    exports: [CitiesModule, CitiesService]
})

export class CitiesModule  {} 
