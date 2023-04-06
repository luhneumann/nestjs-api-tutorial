import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CitiesService } from "./cities.service";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateCityDto } from "./dto/create-city.dto";
import { ListCityDto } from "./dto/list-cities.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { UpdateCityDto } from "./dto/update-city.dto";


@ApiTags('cities')
@Controller('cities')
export class CitiesController {
    constructor ( private readonly citiesService: CitiesService){} 

    @Post()
    @ApiResponse({
        status: 200,
        description: 'Retorna o objeto criado',    
        type: CreateCityDto, 
        isArray: false
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna erro sobre os dados enviados'
    })
    @ApiOperation({ summary: 'Cities - cria uma nova cidade'})
    async create(@Body() body: CreateCityDto) {
        return await this.citiesService.create(body)
    }

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Retorna todos objetos',
        type: ListCityDto,
        isArray: true
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna erro sobre os dados enviados'
    })
    @ApiOperation({ summary: 'Cities - Retorna todas cidades cadastradas'})
    async getAll() {
        return await this.citiesService.getAll()
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'Retorna um objeto',
        type: ListCityDto,
        isArray: false
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna erro sobre os dados enviados'
    })
    @ApiOperation({ summary: 'Cities - Retorna uma cidade de acordo com o parâmetro de busca'})
    async findOne(@Param('id') id: string){
        return await this.citiesService.findOne(id)
    }

    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'Edita uma cidade',
        type: CreateCityDto,
        isArray: false
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna erro sobre os dados enviados'
    })
    @ApiOperation({ summary: 'Cities - Edita uma cidade'})
    async update(
        @Param('id') id: string,
        @Body() body: UpdateCityDto
        
    ) { 
        return await this.citiesService.update(id, body)
    }

    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'Deleta uma cidade',
        type: UpdateCityDto,
        isArray: false
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna erro sobre os dados enviados'
    })
    @ApiOperation({ summary: 'Cities - Deleta uma cidade'})
    async remove(@Param('id') id: string){
        return await this.citiesService.remove(id)
    }
}  