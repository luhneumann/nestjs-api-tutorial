import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ListAnimalDto } from './dto/list-animal.dto';


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
  @ApiOperation({summary: 'Animals - Lista todos os animais'})
  async findAll() {
    return await this.animalsService.findAll();
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
  @ApiOperation({summary: 'Animals - Retorna um animal'})
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