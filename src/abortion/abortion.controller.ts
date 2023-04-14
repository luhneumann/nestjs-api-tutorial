import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { AbortionService } from './abortion.service';
import { CreateAbortionDto } from './dto/create-abortion.dto';
import { UpdateAbortionDto } from './dto/update-abortion.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListAbortionDto } from './dto/list-abortion.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('abortion')
@Controller('abortion')
export class AbortionController {
  constructor(private readonly abortionService: AbortionService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Cria um objeto',
    type: CreateAbortionDto,
    isArray: false
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna uma mensagem de erro sobre os dados enviados',   
  })
  @ApiOperation({ summary: 'Abortion - Cria um novo registro de aborto'})
  async create(@Body() createAbortionDto: CreateAbortionDto) {
    return await this.abortionService.create(createAbortionDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListAbortionDto,
    isArray: true
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna uma mensagem de erro sobre os dados enviados',   
  })
  @ApiOperation({ summary: 'Abortion - Lista todos registros de aborto'})
  async findAll() {
    return await this.abortionService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListAbortionDto,
    isArray: false
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna uma mensagem de erro sobre os dados enviados',   
  })
  @ApiOperation({ summary: 'Abortion - Retorna um registro de aborto'})
  async findOne(@Param('id') id: string) {
    return await this.abortionService.findOne(id);
  } 

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Edita um objeto',
    type: UpdateAbortionDto,
    isArray: false
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna uma mensagem de erro sobre os dados enviados',   
  })
  @ApiOperation({ summary: 'Abortion - Edita um registro de aborto'})
  async update(@Param('id') id: string, @Body() updateAbortionDto: UpdateAbortionDto) {
    return await this.abortionService.update(id, updateAbortionDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Deleta um objeto',
    type: UpdateAbortionDto,
    isArray: false
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna uma mensagem de erro sobre os dados enviados',   
  })
  @ApiOperation({ summary: 'Abortion - Lista todos registros de aborto'})
  @ApiResponse({
    status: 200,
    description: 'Cria um objeto',
    type: ListAbortionDto,
    isArray: true
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna uma mensagem de erro sobre os dados enviados',   
  })
  @ApiOperation({ summary: 'Abortion - Lista todos registros de aborto'})
  async remove(@Param('id') id: string) {
    return await this.abortionService.remove(id);
  }
}
