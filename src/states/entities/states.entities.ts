import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({versionKey: false})
export class State extends Document {
    @Prop({ type: String, required: true})
    abbreviation: string

    @Prop({type: String})
    name: string
}

export const StateSchema = SchemaFactory.createForClass(State)