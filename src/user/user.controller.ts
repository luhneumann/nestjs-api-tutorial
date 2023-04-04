import { Controller, Get, Post } from "@nestjs/common"
import { Body, UseGuards } from "@nestjs/common/decorators"
import { ApiResponse } from "@nestjs/swagger"
import { ApiOperation } from "@nestjs/swagger/dist"
import { CreateUserDto } from "./dto/create-user.dto"
import { ListUserDto } from "./dto/list-user.dto"
import { User } from "./entities/user.entities"
import { UserService } from "./user.service"
import { JwtAuthGuard } from "src/auth/jwt-auth.guard"


@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController{    
    constructor(private readonly UserService: UserService) {}    

    @Post()
    @ApiResponse({
        status: 200,
        description: 'Retorna objeto criado', 
        type: ListUserDto,       
        isArray: false,
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna uma mensagem de erro sobre os dados enviados'
    })
    @ApiOperation({ summary: 'Usuário - cria um Usuário'})
    create(@Body() createUserDto: CreateUserDto) {
        return this.UserService.create(createUserDto)
    }

    @Get()
    async getAll() : Promise<User[]> {
        return this.UserService.getAll()
    }
    
}