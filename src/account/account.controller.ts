import { Body, Controller, Post } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthService } from "src/auth/auth.service";
import { UserRefreshTokenDto, signInDTO } from "src/account/dto/account.dto";
import { CreateUserDto } from "src/user/dto/create-user.dto";

@ApiTags('account')
@Controller('account')
export class AccountController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) { }
   
    @Post('signup')
    async signUp(@Body() body: CreateUserDto) {
      return await this.authService.signUp(body)
    }     

    @Post('signin')   
    async signIn(@Body() body: signInDTO) {
      const user = await this.authService.validateUser(body)
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email
      }             
      return { user, token: this.jwtService.sign(payload)};
    }

    @Post('refresh-token')
    @ApiOperation({summary: 'Atualizar token'})
    @ApiCreatedResponse({
      description: 'The token has been successfully created',
      type: UserRefreshTokenDto
    })
    async refreshToken(@Body() {refresh_token}: UserRefreshTokenDto){
      try {
        const decode: any = this.jwtService.decode(refresh_token)
      } catch (error) {
        
      }
    }
             
}