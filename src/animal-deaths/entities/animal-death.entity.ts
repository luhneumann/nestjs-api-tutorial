import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Date, Document } from "mongoose";
import { Animal } from "src/animals/entities/animal.entity";
import { Management } from "src/managements/entities/management.entity";
import { User } from "src/user/entities/user.entities";

@Schema({versionKey: false})
export class AnimalDeath extends Document{
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:User.name , required: false })
    user: User

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:Animal.name , required: false })
    animal: Animal

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:Management.name , required: false })
    management_id: Management

    @Prop({ type: Date, required: false})
    date: Date
    
    @Prop({ type: String, required: false})
    reason: string

    @Prop({ type: String, required: false})
    observation: string    
}
export const AnimalDeathSchema = SchemaFactory.createForClass(AnimalDeath)
