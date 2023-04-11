import { ApiProperty } from "@nestjs/swagger";
import { Animal } from "src/animals/entities/animal.entity";
import { User } from "src/user/entities/user.entities";

export class CreateAnimalDeathDto {
    @ApiProperty({ type: String, required: false})
    user: User

    @ApiProperty({ type: String, required: false})
    animal: Animal

    @ApiProperty({ type: Date, required: false})
    date: Date

    @ApiProperty({ type: String, required: false})
    reason: string

    @ApiProperty({ type: String, required: false})
    observation: string     
}
