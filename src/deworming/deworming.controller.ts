import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DewormingService } from './deworming.service';
import { CreateDewormingDto } from './dto/create-deworming.dto';
import { UpdateDewormingDto } from './dto/update-deworming.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListDewormingDto } from './dto/list-deworming.dto';

@ApiTags('deworming')
@Controller('deworming')
export class DewormingController {
  constructor(private readonly dewormingService: DewormingService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Cria um objeto',
    type: CreateDewormingDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma resposta de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Deworming - Cria um novo registro de vermifugação'})
  async create(@Body() createDewormingDto: CreateDewormingDto) {
    return await this.dewormingService.create(createDewormingDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListDewormingDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma resposta de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Deworming - Lista os registros de vermifugação'})
  async findAll() {
    return this.dewormingService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListDewormingDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma resposta de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Deworming - retorna um registro de vermifugação'})  
  async findOne(@Param('id') id: string) {
    return await this.dewormingService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Edita um objeto',
    type: UpdateDewormingDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma resposta de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Deworming - Edita um registro de vermifugação'})
  async update(@Param('id') id: string, @Body() updateDewormingDto: UpdateDewormingDto) {
    return await this.dewormingService.update(id, updateDewormingDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Deleta um objeto',   
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma resposta de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Deworming - Lista os registros de vermifugação'})
  async remove(@Param('id') id: string) {
    return await this.dewormingService.remove(id);
  }
}
