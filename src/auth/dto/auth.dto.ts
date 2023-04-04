import { ApiProperty } from "@nestjs/swagger";

export class signInDTO {
  @ApiProperty({ type: String, description: 'email'})
  email: string;

  @ApiProperty({ type: String, description: 'senha'})
  password: string; 
    
}