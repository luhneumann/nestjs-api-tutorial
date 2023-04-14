import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { City } from "src/cities/entities/cities.entities";
import { Profession } from "src/professions/entities/professions.entities";
import { State } from "src/states/entities/states.entities";


@Schema({versionKey: false})
export class User extends Document {
    
    @Prop({type: String, required: true})
    name:string;

    @Prop({type: String, required: true})
    email:string; 

    @Prop({type: String, required: false})
    phoneNumber:string;

    @Prop({type: String, required: true})    
    password:string; 

    @Prop({type: mongoose.Schema.Types.ObjectId,
        ref: Profession.name,
        required: false,
    })
    profession: string

    @Prop({type: mongoose.Schema.Types.ObjectId,
         ref: State.name,
         required: false
    })
    state: State

    @Prop({type: mongoose.Schema.Types.ObjectId,
        ref: City.name,
        required: false
    })
    city: City       
    
}

export const UserSchema = SchemaFactory.createForClass(User)