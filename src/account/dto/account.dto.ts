import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class signInDTO {
  @ApiProperty({ type: String, description: 'email'})
  email: string;

  @ApiProperty({ type: String, description: 'senha'})
  password: string; 
    
}

export class UserRefreshTokenDto {
    @ApiProperty({ uniqueItems: true, description: 'token'})
    @IsNotEmpty({ message: 'refresh_token é obrigatório'})
    refresh_token: string
}