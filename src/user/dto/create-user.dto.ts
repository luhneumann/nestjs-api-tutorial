import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";
import { City } from "src/cities/entities/cities.entities";
import { State } from "src/states/entities/states.entities";

export class CreateUserDto {
    @ApiProperty({
        type: String,
        required: false,        
    })
    name:string;

    @IsEmail()
    @ApiProperty({
        type: String,
        required: false,
              
    })
    email:string; 

    @ApiProperty({
        type: String,
        required: false,      
    })
    password:string; 

    @ApiProperty({
        type: String,
        required: false,      
    })
    phoneNumber:string; 

    @ApiProperty({
        type: String,
        required: false,      
    })
    profession:string; 

    @ApiProperty({
        type: String,
        required: false,      
    })
    state: State; 

    @ApiProperty({
        type: String,
        required: false,      
    })
    city: City; 

    @ApiProperty({
        type: String,
        required: false,      
    })
    farm:string; 
}