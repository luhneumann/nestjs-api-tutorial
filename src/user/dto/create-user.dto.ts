import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        type: String,
        required: true,        
    })
    name:string;

    @ApiProperty({
        type: String,
        required: true,
              
    })
    email:string; 

    @ApiProperty({
        type: String,
        required: true,      
    })
    password:string; 
}