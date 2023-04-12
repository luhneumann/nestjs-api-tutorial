import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({versionKey: false})
export class ReprodutionTime extends Document{
    @Prop({type: Date, required: false})
    date: Date

    @Prop({type: String, required: false})
    cycle_number: string

    @Prop({type: String, required: false})
    days_of_cycle: string
}

export const ReprodutionTimeSchema = SchemaFactory.createForClass(ReprodutionTime)
