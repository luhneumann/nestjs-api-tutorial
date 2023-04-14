import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { StatesService } from "./states.service";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateStateDto } from "./dto/create-state.dto";
import { ListStateDto } from "./dto/list-state-dto";
import { UpdateStatesDto } from "./dto/update-state.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('states')
@Controller('states')
export class StatesController {
    constructor ( private readonly statesService: StatesService){} 

    @Post()
    @ApiResponse({
        status: 200,
        description: 'Retorna o objeto criado',    
        type: CreateStateDto, 
        isArray: false
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna erro sobre os dados enviados'
    })
    @ApiOperation({ summary: 'States - cria um novo estado'})
    async create(@Body() body: CreateStateDto) {
        return await this.statesService.create(body)
    }

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Lista todos estados',    
        type: ListStateDto, 
        isArray: true
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna erro sobre os dados enviados'
    })
    @ApiOperation({ summary: 'States - Lista todos estados'})
    async getAll(){
        return await this.statesService.getAll()
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'Lista um estado',    
        type: ListStateDto, 
        isArray: false
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna erro sobre os dados enviados'
    })
    @ApiOperation({ summary: 'States - Lista um estado'})
    async findOne(@Param('id') id: string){
        return await this.statesService.findOne(id)
    }

    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'Edita um estado',    
        type: UpdateStatesDto, 
        isArray: false
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna erro sobre os dados enviados'
    })
    @ApiOperation({ summary: 'States - Edita um estado'})
    async update(
        @Param('id') id: string,
        @Body() body: UpdateStatesDto,        
    ) {
        return await this.statesService.update(id, body) 
    }

    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'Deleta um estado',    
        type: UpdateStatesDto, 
        isArray: false
    })
    @ApiResponse({
        status: 400,
        description: 'Retorna erro sobre os dados enviados'
    })
    @ApiOperation({summary: 'States - Deleta um estado'})
    async remove(@Param('id') id: string){
        return await this.statesService.remove(id)
    }




    
}  