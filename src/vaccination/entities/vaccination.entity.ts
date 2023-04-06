import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Management } from "src/managements/entities/management.entity";
import { User } from "src/user/entities/user.entities";

@Schema({versionKey: false})
export class Vaccination extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: false})
    user: User

    @Prop({ type: String, required: false})
    vaccine: string

    @Prop({ type: String, required: false})
    dose: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Management.name, required: false})
    management: Management    

}
export const VaccinationSchema = SchemaFactory.createForClass(Vaccination)
