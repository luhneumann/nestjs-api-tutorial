import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ProfessionsService } from "./professions.service";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateProfessionDto } from "./dto/create-professions.dto";
import { ListProfessionDto } from "./dto/list-professions.dto";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { UpdateProfessionDto } from "./dto/update-professions.dto";


@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('professions')
@Controller('professions')
export class ProfessionsController {
    constructor ( private readonly professionsService: ProfessionsService){}   

    @Post()
    @ApiResponse({
        status: 200,
        description: 'Retorna o objeto criado',    
        type: ListProfessionDto, 
        isArray: false
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna mensagem de erro sobre os dados enviados',
    })
    @ApiOperation({
        summary: 'Profissão - cria uma nova profissão'})
    async create(@Body() body: CreateProfessionDto){
        return await this.professionsService.create(body)
    }  

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Retorna todos Objetos',   
        type: ListProfessionDto,     
        isArray: true,
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna mensagem de erro sobre os dados enviados',
    })
    @ApiOperation({
        summary: 'Profissão - lista todas as profissões'
    })
    async findAll() {
      return await this.professionsService.findAll()
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'Retorna um objeto',
        type: ListProfessionDto,
        isArray: false,
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna mensagem de erro sobre os dados enviados',
    })
    @ApiOperation({summary: 'Profession - Lista uma profissão'})
    async findOne(@Param('id') id: string ){
        return await this.professionsService.findOne(id)
    }

    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'Retorna o objeto editado',
        type: UpdateProfessionDto,
        isArray: false
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna mensagem de erro sobre os dados enviados'
    })
    @ApiOperation({summary: 'Profession - Edita uma profissão'})
    async update(
        @Param('id') id: string,
        @Body() body: UpdateProfessionDto
        ){
        return await this.professionsService.update(id, body)
    }

    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'Remove um objeto',
        type: ListProfessionDto,
        isArray: false
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna mensagem de erro sobre os dados enviados'
    })
    @ApiOperation({summary: 'Profession - Remove uma profissão'})
    async remove(@Param('id') id: string) {
        return await this.professionsService.remove(id);
    }
}