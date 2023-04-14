import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateFarmDto } from "./dto/create-farm.dto";
import { FarmsService } from "./farms.service";
import { ListFarmDto } from "./dto/list-farm.dto";
import { UpdateFarmDto } from "./dto/update-farm.dto";
import { ListUserDto } from "src/user/dto/list-user.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('farms')
@Controller('farms')
export class FarmsController {
    constructor(private readonly farmsService: FarmsService) { }
        
    @Post()
    @ApiResponse({
        status: 200,
        description: 'Cria um objeto',
        type: CreateFarmDto,
        isArray: false
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna uma mensagem de erro sobre os dados enviados',
    })
    @ApiOperation({ summary: 'Farms - Cria uma nova fazenda' })
    async create(@Body() createFarmDto: CreateFarmDto) {
        return await this.farmsService.create(createFarmDto)
    }

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Retorna todos objetos',
        type: ListFarmDto,
        isArray: true
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna uma mensagem de erro sobre os dados enviados',
    })
    @ApiOperation({ summary: 'Farms - retorna todas fazendas' })
    async findAll() {
        return await this.farmsService.findAll()
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'Retorna um objeto',
        type: ListFarmDto,
        isArray: false
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna uma mensagem de erro sobre os dados enviados',
    })
    @ApiOperation({ summary: 'Farms - retorna todas fazendas'})
    async findOne(@Param('id') id: string) {
        return await this.farmsService.findOne(id)
    }

    
    @Get('/user/:user_id')
    @ApiResponse({
        status: 200,
        description: 'Retorna um objeto',
        type: ListUserDto,
        isArray: true
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna uma mensagem de erro sobre os dados enviados',
    })
    @ApiOperation({ summary: 'Farms - retorna todas fazendas de um dado ID'})
    async findByUser(@Param('user_id') user_id) {
        return await this.farmsService.findByUserId(user_id)
    }

    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'Edita um objeto',
        type: UpdateFarmDto,
        isArray: false
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna uma mensagem de erro sobre os dados enviados',
    })
    @ApiOperation({ summary: 'Farms - retorna todas fazendas' })
    async update(@Param('id') id: string, @Body() updateFarmDto: UpdateFarmDto) {
        return await this.farmsService.update(id, updateFarmDto)
    }

    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'Retorna todos objetos',       
        isArray: false
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna uma mensagem de erro sobre os dados enviados',
    })
    @ApiOperation({ summary: 'Farms - retorna todas fazendas' })
    async getAll(@Param('id') id: string) {
        return await this.farmsService.remove(id)
    }
}

