import { Body, Controller, Post } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "src/auth/auth.service";
import { signInDTO } from "src/auth/dto/auth.dto";
import { CreateUserDto } from "src/user/dto/create-user.dto";

@ApiTags('account')
@Controller('/')
export class AccountController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) { }
   
    @Post('signup')
    signUp(@Body() body: CreateUserDto) {
      return this.authService.signUp(body)
    }
    @Post('signin')   
    signIn(@Body() body: signInDTO) {
      return this.authService.signIn(body)
    }
   
          
}