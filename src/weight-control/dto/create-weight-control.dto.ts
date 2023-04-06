import { ApiProperty } from "@nestjs/swagger";
import { Animal } from "src/animals/entities/animal.entity";
import { Management } from "src/managements/entities/management.entity";
import { User } from "src/user/entities/user.entities";

export class CreateWeightControlDto {
    @ApiProperty({ type: String, required: false })
    user: User

    @ApiProperty({ type: String, required: false})
    animal: Animal

    @ApiProperty({ type: Date, required: false})
    date: Date

    @ApiProperty({ type: String, required: false})
    management: Management

    @ApiProperty({ type: String, required: false})
    animal_weight: string  
}
 