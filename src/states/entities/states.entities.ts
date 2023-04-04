import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({versionKey: false})
export class States extends Document {
    @Prop({type: String})
    state: string
}

export const StateSchema = SchemaFactory.createForClass(States)