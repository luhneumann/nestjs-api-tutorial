import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({versionKey: false})
export class Expense extends Document {
    @Prop({ type: Date, required: false})
    date: Date

    @Prop({ type: String, required: false})
    expense_title: string

    @Prop({ type: String, required: false})
    expense_type: string

    @Prop({ type: String, required: false})
    expense_value: string

    @Prop({ type: String, required: false})
    observation: string 
}
export const ExpenseSchema = SchemaFactory.createForClass(Expense)