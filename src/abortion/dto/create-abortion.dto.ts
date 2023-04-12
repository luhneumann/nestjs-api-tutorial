import { ApiProperty } from "@nestjs/swagger";
import { Animal } from "src/animals/entities/animal.entity";

export class CreateAbortionDto {
    @ApiProperty({ type: String, required: false})
    animal: Animal
    
    @ApiProperty({ type: Date, required: false})
    date: Date

    @ApiProperty({ type: String, required: false})
    observation: string

}
