import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { AnimalDeath } from "src/animal-deaths/entities/animal-death.entity";
import { Animal } from "src/animals/entities/animal.entity";
import { Disease } from "src/disease/entities/disease.entity";
import { Management } from "src/managements/entities/management.entity";
import { User } from "src/user/entities/user.entities";

@Schema({versionKey: false})
export class Event extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name , required: false})
    user: User

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Management.name , required: false})
    management_id: Management

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Animal.name , required: false})
    animal: Animal

    @Prop({ type: Date, required: false})
    date: Date

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Disease.name, required: false})
    diseases: Disease
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: AnimalDeath.name, required: false})
    deaths: AnimalDeath

    @Prop({ type: String, required: false})
    observation: string
}
export const EventSchema = SchemaFactory.createForClass(Event)
