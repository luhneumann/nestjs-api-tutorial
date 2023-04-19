import { ApiProperty } from "@nestjs/swagger";
import { IsDate } from "class-validator";
import { Animal } from "src/animals/entities/animal.entity";

export class CreateAbortionDto {
    @ApiProperty({ type: String, example:'125d584f8e5',required: false})
    animal: Animal
    
    @IsDate()
    @ApiProperty({ type: Date, example: '10/12/2021',required: false})
    date: Date
    
    @ApiProperty({ type: String, required: false})
    observation: string

}
