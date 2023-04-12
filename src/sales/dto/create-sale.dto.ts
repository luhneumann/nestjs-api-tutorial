import { ApiProperty } from "@nestjs/swagger";
import { Animal } from "src/animals/entities/animal.entity";
import { Lot } from "src/lots/entities/lot.entity";

export class CreateSaleDto {

    @ApiProperty({ type: String, required: false})
    sale_group: string
    
    @ApiProperty({ type: String, required: false})
    date: Date
     
    @ApiProperty({ type: String, required: false})
    lot: Lot
     
    @ApiProperty({ type: String, required: false})
    animal: Animal
     
    @ApiProperty({ type: String, required: false})
    sale_type: string
     
    @ApiProperty({ type: String, required: false})
    animal_price: string
     
    @ApiProperty({ type: String, required: false})
    carcass_weight: string

    @ApiProperty({ type: String, required: false})
    price_by_kg: string

    @ApiProperty({ type: String, required: false})
    observation: string
}



    

  
    