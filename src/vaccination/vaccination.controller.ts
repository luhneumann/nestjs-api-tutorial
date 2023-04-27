import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { VaccinationService } from './vaccination.service';
import { CreateVaccinationDto } from './dto/create-vaccination.dto';
import { UpdateVaccinationDto } from './dto/update-vaccination.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListVaccinationDto } from './dto/list-vaccination.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('vaccination')
@Controller('vaccination')
export class VaccinationController {
  constructor(private readonly vaccinationService: VaccinationService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Cria um objeto',
    type: CreateVaccinationDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Vaccination - cria um novo registro de vacinação'})
  async create(@Body() createVaccinationDto: CreateVaccinationDto) {
    return await this.vaccinationService.create(createVaccinationDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Lista Objetos',
    type: ListVaccinationDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Vaccination - Lista registros de vacinação'})
  async findAll() {
    return await this.vaccinationService.findAll();
  }

  @Get('/animal/:animal_id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListVaccinationDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma resposta de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Vaccination - retorna os registros de vacinação de um animal'})  
  async findByAnimal(@Param('animal_id') animal_id: string) {
    return await this.vaccinationService.findVaccinesByAnimals(animal_id);
  }

  @Get('/last/:animal_id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListVaccinationDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma resposta de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Vaccination - retorna o registro de vacinação mais recente de um animal'})  
  async lastDeworming(@Param('animal_id') animal_id: string) {
    return await this.vaccinationService.vaccineIndicatorFilter(animal_id);
  }

  @Get('/days/:animal_id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListVaccinationDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma resposta de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Vaccination - retorna o número de dias desde a última vacina'})  
  async daysFromLastVaccine(@Param('animal_id') animal_id: string) {
    return await this.vaccinationService.daysFromLastVaccination(animal_id);
  }
  
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListVaccinationDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Vaccination - retorna um registro de vacinação'})
  async findOne(@Param('id') id: string) {
    return await this.vaccinationService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Edita um objeto',
    type: UpdateVaccinationDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Vaccination - Edita um registro de vacinação'})
  async update(@Param('id') id: string, @Body() updateVaccinationDto: UpdateVaccinationDto) {
    return await this.vaccinationService.update(id, updateVaccinationDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Remove um objeto',
    type: UpdateVaccinationDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Vaccination - deleta um registro de vacinação'})
  async remove(@Param('id') id: string) {
    return await this.vaccinationService.remove(id);
  }
}
