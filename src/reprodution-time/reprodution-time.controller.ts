import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ReprodutionTimeService } from './reprodution-time.service';
import { CreateReprodutionTimeDto } from './dto/create-reprodution-time.dto';
import { UpdateReprodutionTimeDto } from './dto/update-reprodution-time.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListReprodutionTimeDto } from './dto/list-reprodution-time.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('reprodution-time')
@Controller('reprodution-time')
export class ReprodutionTimeController {
  constructor(private readonly reprodutionTimeService: ReprodutionTimeService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Cria um novo objeto',
    type: CreateReprodutionTimeDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'    
  })
  @ApiOperation({ summary: 'Reprodution-time - Cria um novo registro de reprodução'})
  async create(@Body() createReprodutionTimeDto: CreateReprodutionTimeDto) {
    return await this.reprodutionTimeService.create(createReprodutionTimeDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListReprodutionTimeDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'    
  })
  @ApiOperation({ summary: 'Reprodution-time - Retorna todos registros de reprodução'})
  async findAll() {
    return await this.reprodutionTimeService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListReprodutionTimeDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'    
  })
  @ApiOperation({ summary: 'Reprodution-time - Retorna um registro de reprodução'})
  async findOne(@Param('id') id: string) {
    return await this.reprodutionTimeService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Edita um objeto',
    type: UpdateReprodutionTimeDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'    
  })
  @ApiOperation({ summary: 'Reprodution-time - Edita um registro de reprodução'})
  async update(@Param('id') id: string, @Body() updateReprodutionTimeDto: UpdateReprodutionTimeDto) {
    return await this.reprodutionTimeService.update(id, updateReprodutionTimeDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Remove um objeto',
    type: UpdateReprodutionTimeDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'    
  })
  @ApiOperation({ summary: 'Reprodution-time - Remove um registro de reprodução'})
  async remove(@Param('id') id: string) {
    return await this.reprodutionTimeService.remove(id);
  }
}
