import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { GestationsService } from './gestations.service';
import { CreateGestationDto } from './dto/create-gestation.dto';
import { UpdateGestationDto } from './dto/update-gestation.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListAbortionDto } from 'src/abortion/dto/list-abortion.dto';
import { ListGestationDto } from './dto/list-gestation.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('gestations')
@Controller('gestations')
export class GestationsController {
  constructor(private readonly gestationsService: GestationsService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Cria um objeto',
    type: CreateGestationDto,
    isArray: false    
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'       
  })
  @ApiOperation({ summary: 'Gestations - Cria um novo registro de gestação'})
  async create(@Body() createGestationDto: CreateGestationDto) {
    return await this.gestationsService.create(createGestationDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListGestationDto,
    isArray: true    
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'       
  })
  @ApiOperation({ summary: 'Gestations - Retorna uma lista de registros de gestação'})
  async findAll() {
    return await this.gestationsService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListGestationDto,
    isArray: false    
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'       
  })
  @ApiOperation({ summary: 'Gestations - Retorna um registro de gestação'})  
  async findOne(@Param('id') id: string) {
    return await this.gestationsService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Edita um objeto',
    type: UpdateGestationDto,
    isArray: false    
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'       
  })
  @ApiOperation({ summary: 'Gestations - Edita um registro de gestação'})
  async update(@Param('id') id: string, @Body() updateGestationDto: UpdateGestationDto) {
    return await this.gestationsService.update(id, updateGestationDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListGestationDto,
    isArray: true    
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'       
  })
  @ApiOperation({ summary: 'Gestations - Retorna uma lista de registros de gestação'})
  async remove(@Param('id') id: string) {
    return await this.gestationsService.remove(id);
  }
}
