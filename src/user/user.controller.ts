import { Controller, Get, Post } from "@nestjs/common"
import { Body, Delete, Param, Put, UseGuards } from "@nestjs/common/decorators"
import { ApiResponse } from "@nestjs/swagger"
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger/dist"
import { CreateUserDto } from "./dto/create-user.dto"
import { ListUserDto } from "./dto/list-user.dto"
import { User } from "./entities/user.entities"
import { UserService } from "./user.service"
import { JwtAuthGuard } from "src/auth/jwt-auth.guard"
import { UpdateUserDto } from "./dto/update-user.dto"

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('user')
@Controller('user')
export class UserController{    
    constructor(private readonly UserService: UserService) {}    

    @Post()
    @ApiResponse({
        status: 200,
        description: 'Retorna objeto criado', 
        type: CreateUserDto,       
        isArray: false,
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna uma mensagem de erro sobre os dados enviados'
    })
    @ApiOperation({ summary: 'Usuário - cria um Usuário'})
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.UserService.create(createUserDto)
    }

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Retorna todos objetos.',
        type: ListUserDto,
        isArray: true,
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna uma mensagem de erro sobre os dados enviados'
    })
    @ApiOperation({
        summary: 'Usuário - lista todos usuários'
    })
    async getAll() {
        return await this.UserService.getAll()
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'Retorna um objeto', 
        type: ListUserDto,       
        isArray: false,
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna uma mensagem de erro sobre os dados enviados'
    })
    @ApiOperation({ summary: 'Usuário - retorna um usuário'})
    async getById(@Param('id') id: string) {
        return await this.UserService.findOne(id)
    }    

    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'Edita um usuário', 
        type: ListUserDto,       
        isArray: false,
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna uma mensagem de erro sobre os dados enviados'
    })
    @ApiOperation({summary: 'Usuário - edita um usuário'})
    async update(
        @Param('id') id: string,
        @Body() data: UpdateUserDto
    ) {
        return await this.UserService.update(id, data)
    }

    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'Remove um usuário', 
        type: UpdateUserDto,       
        isArray: false,
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna uma mensagem de erro sobre os dados enviados'
    })
    @ApiOperation({ summary: 'Usuário - remove um usuário'})
    async remove(
        @Param('id') id: string
    ){
        return await this.UserService.delete(id)
    }
}