import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({versionKey: false})
export class Cities extends Document {
    @Prop({type: String})
    city: string
}

export const CitiesSchema = SchemaFactory.createForClass(Cities)