import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { AuthGuard } from "@nestjs/passport";


@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {}
    
    @Post('signup')
    signUp(@Body() createUserDto: CreateUserDto) {
        return this.authService.signUp(createUserDto)
    }
    
    @UseGuards(AuthGuard)
    @Post('signin')
    signIn(@Body() createUserDto: CreateUserDto) {
        return this.authService.validateUser(createUserDto)
    }  
}