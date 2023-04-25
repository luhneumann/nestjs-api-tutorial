import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { WeightControlService } from './weight-control.service';
import { CreateWeightControlDto } from './dto/create-weight-control.dto';
import { UpdateWeightControlDto } from './dto/update-weight-control.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListWeightControlDto } from './dto/list-weight-control.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('weight-control')
@Controller('weight-control')
export class WeightControlController {
  constructor(private readonly weightControlService: WeightControlService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Cria um novo objeto',
    type: CreateWeightControlDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Weight-Control - Cria um novo registro de peso'})
  async create(@Body() createWeightControlDto: CreateWeightControlDto) {
    return await this.weightControlService.create(createWeightControlDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListWeightControlDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Weight-Control - Retorna uma lista de registros de peso'})
  async findAll() {
    return await this.weightControlService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListWeightControlDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Weight-Control - Retorna um registro de peso'})
  async findOne(@Param('id') id: string) {
    return await this.weightControlService.findOne(id);
  }

  @Get('/animal/:animal_id')
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListWeightControlDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Weight-Control - Retorna uma lista de registros de peso de um animal'})
  async findByAnimal(@Param('animal_id') animal_id: string) {
    return await this.weightControlService.findWeightByAnimals(animal_id);
  }

  @Get('/last/:animal_id')
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListWeightControlDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Weight-Control - Retorna uma lista de registros de peso de um animal'})
  async lastAnimalWeight(@Param('animal_id') animal_id: string) {
    return await this.weightControlService.weightIndicatorFilter(animal_id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Edita um objeto',
    type: UpdateWeightControlDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Weight-Control - Edita um registro de peso'})
  update(@Param('id') id: string, @Body() updateWeightControlDto: UpdateWeightControlDto) {
    return this.weightControlService.update(id, updateWeightControlDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Deleta um objeto',
    type: UpdateWeightControlDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Weight-Control - Deleta um registro de peso'})
  remove(@Param('id') id: string) {
    return this.weightControlService.remove(id);
  }
}
