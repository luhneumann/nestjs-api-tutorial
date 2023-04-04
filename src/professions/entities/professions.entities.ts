import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({versionKey: false})
export class Profession extends Document {
    @Prop({type: String})
    profession: string
}

export const ProfessionSchema = SchemaFactory.createForClass(Profession)