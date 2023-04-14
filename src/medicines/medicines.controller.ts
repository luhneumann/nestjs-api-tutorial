import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListMedicineDto } from './dto/list-medicine.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('medicines')
@Controller('medicines')
export class MedicinesController {
  constructor(private readonly medicinesService: MedicinesService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Cria um objeto',
    type: CreateMedicineDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Medicine - Cria um novo registro de administração de medicamento'})
  async create(@Body() createMedicineDto: CreateMedicineDto) {
    return await this.medicinesService.create(createMedicineDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListMedicineDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Medicine - Retorna uma lista de registros de administração de medicamentos'})
  async findAll() {
    return await this.medicinesService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListMedicineDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Medicine - Retorna um registro de administração de medicamento'})
  async findOne(@Param('id') id: string) {
    return await this.medicinesService.findOne(id);
  }  

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Edita um objeto',
    type: UpdateMedicineDto    
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Medicine - Edita um registro de administração de medicamento'})
  async update(@Param('id') id: string, @Body() updateMedicineDto: UpdateMedicineDto) {
    return await this.medicinesService.update(id, updateMedicineDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Deleta um objeto',
    type: UpdateMedicineDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Medicine - Remove o registro de administração de medicamento'})
  async remove(@Param('id') id: string) {
    return await this.medicinesService.remove(id);
  }
}
