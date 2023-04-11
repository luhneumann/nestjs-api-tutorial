import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Animal } from "src/animals/entities/animal.entity";
import { Lot } from "src/lots/entities/lot.entity";
import { Management } from "src/managements/entities/management.entity";
import { User } from "src/user/entities/user.entities";

@Schema({versionKey: false})
export class Medicine extends Document {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref:User.name, required: false})
    user: User    

    @Prop({type: mongoose.Schema.Types.ObjectId, ref:Lot.name, required: false})
    lot: Lot

    @Prop({type: mongoose.Schema.Types.ObjectId, ref:Animal.name, required: false})
    animal: Animal

    @Prop({type: mongoose.Schema.Types.ObjectId, ref:Management.name, required: false})
    management_id: Management

    @Prop({type: String, required: false})
    category: string

    @Prop({type: Date, required: false})
    date: Date

    @Prop({type: String, required: false})
    medicine_or_supplement: string
    
    @Prop({type: String, required: false})
    dose: string

    @Prop({type: String, required: false})
    observation: string
}

export const MedicineSchema = SchemaFactory.createForClass(Medicine)
