import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ManagementsService } from './managements.service';
import { CreateManagementDto } from './dto/create-management.dto';
import { UpdateManagementDto } from './dto/update-management.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListManagementDto } from './dto/list-management.dto';


@ApiTags('managements')
@Controller('managements')
export class ManagementsController {
  constructor(private readonly managementsService: ManagementsService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description:'Cria um objeto',
    type: CreateManagementDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description:'Retorna uma mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({ summary: 'Managements - Cria um novo manejo'})
  async create(@Body() createManagementDto: CreateManagementDto) {
    return await this.managementsService.create(createManagementDto);
  }
  
  @Get()
  @ApiResponse({
    status: 200,
    description:'Lista todos os objetos',
    type: ListManagementDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description:'Retorna uma mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({ summary: 'Managements - Lista os manejos existentes'})
  async findAll() {
    return await this.managementsService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description:'Lista um objeto',
    type: ListManagementDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description:'Retorna uma mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({ summary: 'Managements - Lista um manejo'})
  async findOne(@Param('id') id: string) {
    return await this.managementsService.findOne(id);
  }

  @Get('/all/:management_id')
  @ApiResponse({
    status: 200,
    description:'Lista um objeto',
    type: ListManagementDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description:'Retorna uma mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({ summary: 'Managements - Lista o detalhamento dos itens do manejo'})
  async findAllChanges(@Param('management_id') management_id: string) {
    return await this.managementsService.findEachChangesOfManagements(management_id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description:'Edita um objeto',
    type: UpdateManagementDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description:'Retorna uma mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({ summary: 'Managements - Edita um manejo'})
  async update(@Param('id') id: string, @Body() updateManagementDto: UpdateManagementDto) {
    return await this.managementsService.update(id, updateManagementDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description:'Deleta um objeto',
    type: ListManagementDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description:'Retorna uma mensagem de erro sobre os dados enviados',    
  })
  @ApiOperation({ summary: 'Managements - Deleta um manejo'})
  remove(@Param('id') id: string) {
    return this.managementsService.remove(id);
  }
}
