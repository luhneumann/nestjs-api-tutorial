import { ApiProperty } from "@nestjs/swagger"
import mongoose from "mongoose"
import { User } from "src/user/entities/user.entities"

export class CreateAnimalDto {
    @ApiProperty({type: String, required: false })
    user: User

    @ApiProperty({type: String, required: false})
    identification_number: string

    @ApiProperty({type: String, required: false})
    name: string

    @ApiProperty({type: String, required: false})
    email: string

    @ApiProperty({type: String, required: false})
    gender: string    

    @ApiProperty({type: String, required: false})
    category: string

    @ApiProperty({type: String, required: false})
    animal_photo: string

    @ApiProperty({type: String, required: false})
    birth_date: string

    @ApiProperty({type: String, required: false})
    race: string

    @ApiProperty({type: String, required: false})
    dentition: string

    @ApiProperty({type: String, required: false})
    observation: string

    @ApiProperty({type: String, required: false})
    attach_document: string

    @ApiProperty({type: String, required: false})
    father_name: string

    @ApiProperty({type: String, required: false})
    father_proper_animal: string

    @ApiProperty({type: String, required: false})
    mother_name: string

    @ApiProperty({type: String, required: false})
    mother_proper_animal: string

    @ApiProperty({type: String, required: false})
    register_name: string

    @ApiProperty({type: String, required: false})
    register_number: string

    @ApiProperty({type: String, required: false})
    tattoo: string

    @ApiProperty({type: String, required: false})
    service: string 
}



