import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AnimalDeathsService } from './animal-deaths.service';
import { CreateAnimalDeathDto } from './dto/create-animal-death.dto';
import { UpdateAnimalDeathDto } from './dto/update-animal-death.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListAnimalDto } from 'src/animals/dto/list-animal.dto';
import { ListAnimalDeathDto } from './dto/list-animal-death.dto';

@ApiTags('animal-deaths')
@Controller('animal-deaths')
export class AnimalDeathsController {
  constructor(private readonly animalDeathsService: AnimalDeathsService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Cria um novo objeto',
    type: CreateAnimalDeathDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Animal-deaths - Cria um novo registro da morte de um animal'})
  async create(@Body() createAnimalDeathDto: CreateAnimalDeathDto) {
    return await this.animalDeathsService.create(createAnimalDeathDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListAnimalDeathDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Animal-deaths - Retorna uma lista de registros'})
  async findAll() {
    return await this.animalDeathsService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListAnimalDeathDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Animal-deaths - Retorna um registro'})  
  async findOne(@Param('id') id: string) {
    return await this.animalDeathsService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Edita um objeto',
    type: UpdateAnimalDeathDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Animal-deaths - Edita o registro da morte de um animal'})
  async update(@Param('id') id: string, @Body() updateAnimalDeathDto: UpdateAnimalDeathDto) {
    return await this.animalDeathsService.update(id, updateAnimalDeathDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Remove um objeto',
    type: UpdateAnimalDeathDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Animal-deaths - Remove o registro da morte de um animal'})
  remove(@Param('id') id: string) {
    return this.animalDeathsService.remove(id);
  }
}
