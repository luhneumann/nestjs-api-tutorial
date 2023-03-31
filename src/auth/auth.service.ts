import { HttpCode, HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcrypt'
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/user/dto/create-user.dto";


@Injectable()
export class AuthService { 
    constructor(
        private userService: UserService,
        private readonly jwtService: JwtService
    ){}
    
    async validateUser({email, password}: {email:string; password: string}): Promise<any> {
        const user = await this.userService.findByEmail(email);
        if(!user) throw new NotFoundException()
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) throw new UnauthorizedException()
                                
    }   
    async signUp(user: CreateUserDto) {
        const existingEmail = await this.userService.findByEmail(user.email);
        if (!!existingEmail === true) throw new HttpException('Email já existe', HttpStatus.BAD_REQUEST)
        
        
    }    
}