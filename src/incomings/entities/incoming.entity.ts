import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({versionKey: false})
export class Incoming  extends Document{
    @Prop({type: String, required: false})
    id_title: string

    @Prop({type: Date, required: false})
    date: Date

    @Prop({type: String, required: false})
    income_value: string

    @Prop({type: String, required: false})
    observation: string
}
export const IncomingSchema = SchemaFactory.createForClass(Incoming)
