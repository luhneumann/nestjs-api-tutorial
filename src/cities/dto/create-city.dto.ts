import { ApiProperty } from "@nestjs/swagger";
import { State } from "src/states/entities/states.entities";

export class CreateCityDto {
    @ApiProperty({
        type: String,
        required: true
    })
    name: string

    @ApiProperty({
        type: String,
        example: 'uhi23ugbhdhbvt3',
        required: true
    })
    state: State

}