import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Animal } from "src/animals/entities/animal.entity";
import { Lot } from "src/lots/entities/lot.entity";
import { Management } from "src/managements/entities/management.entity";
import { User } from "src/user/entities/user.entities";

@Schema({versionKey: false})
export class Vaccination extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: false})
    user: User

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Lot.name, required: false})
    lot: Lot

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Animal.name, required: false})
    animal: Animal

    @Prop({ type: String, required: false})
    category: string

    @Prop({ type: String, required: false})
    vaccine: string

    @Prop({ type: String, required: false})
    dose: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Management.name, required: false})
    management_id: Management    

}
export const VaccinationSchema = SchemaFactory.createForClass(Vaccination)
