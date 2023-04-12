import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Date, Document } from "mongoose";
import { Animal } from "src/animals/entities/animal.entity";
import { Lot } from "src/lots/entities/lot.entity";


export enum EnumSaleGroup {
    'Animal' = 'Animal',
    'Lot' = 'Lot'
}

export enum EnumSaleType {
    'Animal' = 'Animal',
    'Kg/carcass' = 'Kg/carcass',
    'Kg/alive' = 'Kg/alive'
}

@Schema({versionKey: false})
export class Sale extends Document{
    @Prop({ type: String, enum: EnumSaleGroup, default: EnumSaleGroup.Animal, required: true})
    sale_group: string

    @Prop({ type: Date, required: false })
    date: Date

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Lot.name,  required: false })
    lot: Lot

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Animal.name,  required: false })
    animal: Animal

    @Prop({ type: String, enum: EnumSaleType, default: EnumSaleType.Animal, required: false })
    sale_type: string

    @Prop({ type: String, required: false})
    animal_price: string

    @Prop({ type: String, required: false})
    carcass_weight: string

    @Prop({ type: String, required: false})
    price_by_kg: string

    @Prop({ type: String, required: false})
    observation: string

}
export const SaleSchema = SchemaFactory.createForClass(Sale)
