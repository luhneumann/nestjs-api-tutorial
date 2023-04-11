import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DiseasesService } from './disease.service';
import { CreateDiseaseDto } from './dto/create-disease.dto';
import { UpdateDiseaseDto } from './dto/update-disease.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('diseases')
@Controller('diseases')
export class DiseaseController {
  constructor(private readonly diseasesService: DiseasesService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description:'Cria um objeto',
    type: CreateDiseaseDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description:'Retorna uma mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({ summary: 'Diseases - Cria um novo registro de doença'})
  async create(@Body() createDiseaseDto: CreateDiseaseDto) {
    return await this.diseasesService.create(createDiseaseDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description:'Retorna uma lista de objetos',
    type: UpdateDiseaseDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description:'Retorna uma mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({ summary: 'Diseases - Retorna uma lista de registros de doenças'})
  async findAll() {
    return await this.diseasesService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description:'Retorna um objeto',
    type: UpdateDiseaseDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description:'Retorna uma mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({ summary: 'Diseases - Retorna um registro de doença'})
  async findOne(@Param('id') id: string) {
    return await this.diseasesService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description:'Edita um objeto',
    type: UpdateDiseaseDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description:'Retorna uma mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({ summary: 'Diseases - Edita um registro de doença'})
  async update(@Param('id') id: string, @Body() updateDiseaseDto: UpdateDiseaseDto) {
    return await this.diseasesService.update(id, updateDiseaseDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description:'Remove um objeto'  
  })
  @ApiResponse({
    status: 400,
    description:'Retorna uma mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({ summary: 'Diseases - Remove um registro de doença'})
  async remove(@Param('id') id: string) {
    return await this.diseasesService.remove(id);
  }
}
