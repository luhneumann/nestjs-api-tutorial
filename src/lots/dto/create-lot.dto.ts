import { ApiProperty } from "@nestjs/swagger";
import { Animal } from "src/animals/entities/animal.entity";

export class CreateLotDto {
    @ApiProperty({ type: String, required: true })
    name: string

    @ApiProperty({ type: String, required: true})
    category: string

    @ApiProperty({ type: String, required: true, isArray: true})
    animals: Animal[]
}
