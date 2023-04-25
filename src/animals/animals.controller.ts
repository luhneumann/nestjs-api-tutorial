import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put, Query } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ListAnimalDto } from './dto/list-animal.dto';
import { Animal, GenderEnum } from './entities/animal.entity';
import { query } from 'express';


@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('animals')
@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Cria uma novo objeto',
    isArray: false,
    type: CreateAnimalDto
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({summary: 'Animals - Cria um novo animal'})
  async create(@Body() createAnimalDto: CreateAnimalDto) {
    return await this.animalsService.create(createAnimalDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    isArray: true,
    type: ListAnimalDto
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({summary: 'Animals - Lista os animais pelo parâmetro gênero ou todos animais cadastrados'})
  async findAll(@Query('gender') gender: string) {
    return await this.animalsService.findAll(gender);
  }
 

  @Get('/lots/qty/:farm_id')
  @ApiResponse({
    status: 200,
    type: ListAnimalDto,
    isArray: true,
    description: 'Retorna uma lista de objetos'
  })
  @ApiResponse({
    status: 400,
    isArray: false,
    type: ListAnimalDto,
    description: 'Retorna erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Lots - Retorna a quantidade de animais alocados em lotes'})
  async animalsOnLots(@Param('farm_id') farm_id: string) {
    return await this.animalsService.findLotsAnimalQty(farm_id);
  }
  
  @Get('/farm/qty/:farm_id')
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    isArray: true,
    type: ListAnimalDto
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({summary: 'Animals - Retorna a quantidade de animais registrados em uma farm'})
  async countAnimals(@Param('farm_id') farm_id: string){
    return await this.animalsService.findFarmAnimalQuantity(farm_id);
  } 

  @Get('/farm/:farm_id')
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    isArray: true,
    type: ListAnimalDto
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({summary: 'Animals - Retorna uma lista de animais cadstrados em uma determinada farm'})
  async findByFarm(@Param('farm_id') farm_id: string) {
    return await this.animalsService.findAnimalsByFarm(farm_id);
  } 

  @Get('/lots/:id')
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    isArray: true,
    type: ListAnimalDto
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({summary: 'Animals - Retorna uma lista de animais presentes em um dado lote'})
  async findByLot(@Param('id') id: string) {
    return await this.animalsService.findByLot(id);
  }   

  @Get('/nolots/:farm_id')
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    isArray: true,
    type: ListAnimalDto
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({summary: 'Animals - Retorna uma lista de animais presentes em um dado lote'})
  async findNoLotsAnimals(@Param('farm_id') farm_id: string) {
    return await this.animalsService.findNoLotsAnimals(farm_id);
  }     

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    isArray: false,
    type: ListAnimalDto
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({summary: 'Animals - Retorna um animal pelo seu id'})
  async findOne(@Param('id') id: string) {
    return await this.animalsService.findOne(id);
  }
  
  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Edita um objeto',
    isArray: false,
    type: UpdateAnimalDto
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({summary: 'Animals - Edita um animal'})
  async update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
    return await this.animalsService.update(id, updateAnimalDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Deleta um objeto',
    isArray: false,
    type: UpdateAnimalDto
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({summary: 'Animals - remove um animal'})
  async remove(@Param('id') id: string) {
    return await this.animalsService.remove(id);
  }
}
