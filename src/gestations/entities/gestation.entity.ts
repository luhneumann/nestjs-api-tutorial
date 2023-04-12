import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Date, Document } from "mongoose";
import { Animal } from "src/animals/entities/animal.entity";

export enum MatrizEnum {
    'Prenha' = 'Prenha',
    'Vazia' = 'Vazia'
}

@Schema({})
export class Gestation extends Document{
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Animal.name, required: false })
    animal: Animal

    @Prop({ type: Date, required: false})
    date: Date
    
    @Prop({ type: String, enum: MatrizEnum, default: MatrizEnum.Prenha, required: false})
    matriz: string

    @Prop({ type: String, required: false})
    observations: string
}

export const GestationSchema = SchemaFactory.createForClass(Gestation)
