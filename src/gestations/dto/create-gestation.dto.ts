import { ApiProperty } from "@nestjs/swagger";
import { Date } from "mongoose";
import { Animal } from "src/animals/entities/animal.entity";

export class CreateGestationDto {
    @ApiProperty({type: String, required: false})
    animal: Animal

    @ApiProperty({type: String, required: false})
    date: Date

    @ApiProperty({type: String, required: false})
    matrix: string

    @ApiProperty({type: String, required: false})
    observations: string
}
