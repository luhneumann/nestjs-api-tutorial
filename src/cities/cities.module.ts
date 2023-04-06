import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CitiesSchema, City } from "./entities/cities.entities";
import { CitiesController } from "./cities.controller";
import { CitiesService } from "./cities.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: City.name,
                schema: CitiesSchema
            }
            
        ]),
    ],
    controllers: [CitiesController],
    providers: [CitiesService],
    exports: [CitiesModule, CitiesService]
})

export class CitiesModule  {} 
