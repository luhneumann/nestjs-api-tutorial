import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Animal } from "src/animals/entities/animal.entity";
import { Document } from "mongoose";
import { Farm } from "src/farm/entities/farm.entities";

@Schema({versionKey: false})
export class Lot extends Document {    
    
    @Prop({ type: String, required: true})
    name: string

    @Prop({type: String, required: true})
    category: string

    @Prop({type: [mongoose.Schema.Types.ObjectId], ref: Animal.name    
    })
    animals: Animal[]

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Farm.name, required: false})
    farm: Farm
}
export const LotsSchema = SchemaFactory.createForClass(Lot)
