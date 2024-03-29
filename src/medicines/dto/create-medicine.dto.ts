import { ApiProperty } from "@nestjs/swagger";
import { Animal } from "src/animals/entities/animal.entity";
import { Lot } from "src/lots/entities/lot.entity";
import { Management } from "src/managements/entities/management.entity";
import { User } from "src/user/entities/user.entities";

export class CreateMedicineDto {
    @ApiProperty({type: String, required: false})
    user: User

    @ApiProperty({type: String, required: false})
    management_id: Management

    @ApiProperty({type: String, required: false})
    date: Date

    @ApiProperty({type: String, required: false})
    lot: Lot

    @ApiProperty({type: String, required: false})
    animal: Animal

    @ApiProperty({type: String, required: false})
    category: string

    @ApiProperty({type: String, required: false})
    medicine_or_supplement: string

    @ApiProperty({type: String, required: false})
    dose: string

    @ApiProperty({type: String, required: false})
    observation: string
    
}
