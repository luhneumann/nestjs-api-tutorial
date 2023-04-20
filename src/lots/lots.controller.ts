import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { LotsService } from './lots.service';
import { CreateLotDto } from './dto/create-lot.dto';
import { UpdateLotDto } from './dto/update-lot.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ListLotDto } from './dto/list-lot.dto';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('lots')
@Controller('lots')
export class LotsController {
  constructor(private readonly lotsService: LotsService) {}

  @Post()
  @ApiResponse({
    status: 200,
    type: CreateLotDto,
    isArray: false,
    description: 'Retorna o objeto criado'
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Lots - Cria um novo lote'})  
  async create(@Body() createLotDto: CreateLotDto) {
    return await this.lotsService.create(createLotDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: ListLotDto,
    description: 'Retorna todos objetos'
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Lots - Retorna todos os lotes'})
  async findAll() {
    return await this.lotsService.getAll();
  }

  @Get('farm/:farm_id')
  @ApiResponse({
    status: 200,
    type: ListLotDto,
    isArray: true,
    description: 'Retorna uma lista de objetos'
  })
  @ApiResponse({
    status: 400,
    isArray: false,
    type: ListLotDto,
    description: 'Retorna erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Lots - Retorna todos os lotes existentes em uma Farm'})
  async findByFarm(@Param('farm_id') farm_id: string) {
    return await this.lotsService.findLotsByFarm(farm_id);
  }

  @Get('animals/:farm_id')
  @ApiResponse({
    status: 200,
    type: ListLotDto,
    isArray: true,
    description: 'Retorna uma lista de objetos'
  })
  @ApiResponse({
    status: 400,
    isArray: false,
    type: ListLotDto,
    description: 'Retorna erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Lots - Retorna todos animais alocados em lotes'})
  async animalsOnLots(@Param('farm_id') farm_id: string) {
    return await this.lotsService.findAnimalsOnLots(farm_id);
  }


  @Get(':id')
  @ApiResponse({
    status: 200,
    type: ListLotDto,
    isArray: true,
    description: 'Retorna um objeto'
  })
  @ApiResponse({
    status: 400,
    isArray: false,
    type: ListLotDto,
    description: 'Retorna erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Lots - Retorna um Lote'})
  async findOne(@Param('id') id: string) {
    return await this.lotsService.findOne(id);
  }

  
  @Put(':id')
  @ApiResponse({
    status: 200,
    type: UpdateLotDto,
    isArray: false,
    description: 'Edita um objeto'
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Lots - Edita um Lote'})
  async update(
    @Param('id') id: string, 
    @Body() updateLotDto: UpdateLotDto) {
    return this.lotsService.update(id, updateLotDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    type: UpdateLotDto,
    isArray: false,    
    description: 'Deleta um objeto'
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Lots - Remove um lote'})
  async remove(@Param('id') id: string) {
    return await this.lotsService.remove(id);
  }
}
