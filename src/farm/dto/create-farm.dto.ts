import { ApiProperty } from "@nestjs/swagger"
import { City } from "src/cities/entities/cities.entities"
import { State } from "src/states/entities/states.entities"
import { User } from "src/user/entities/user.entities"

export class CreateFarmDto {
    @ApiProperty({ type: String, required: false})
    user: User

    @ApiProperty({ type: String, required: false})
    name: string

    @ApiProperty({ type: String, required: false})
    email: string

    @ApiProperty({ type: String, required: false})
    state: State

    @ApiProperty({type: String, required: false})
    city: City

    @ApiProperty({ type: String, required: false})
    address: string

    @ApiProperty({ type: Number, required: false})
    milking_animals: number

    @ApiProperty({ type: String, required: false})
    first_milking: string

    @ApiProperty({ type: String, required: false})
    second_milking: string

    @ApiProperty({ type: String, required: false})
    third_milking: string

    @ApiProperty({ type: String,  required: false})
    embryo_transfer: string

    @ApiProperty({type: Number, required: false})
    total_animals: number


}
