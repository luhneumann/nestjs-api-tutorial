import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ParturitionsService } from './parturitions.service';
import { CreateParturitionDto } from './dto/create-parturition.dto';
import { UpdateParturitionDto } from './dto/update-parturition.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListParturitionDto } from './dto/list-parturition.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('parturitions')
@Controller('parturitions')
export class ParturitionsController {
  constructor(private readonly parturitionsService: ParturitionsService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Cria um novo objeto',
    type: CreateParturitionDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Parturitions - Cria um novo registro de parto'})
  async create(@Body() createParturitionDto: CreateParturitionDto) {
    return await this.parturitionsService.create(createParturitionDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListParturitionDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Parturitions - Retorna uma lista de registros de parto'})
  async findAll() {
    return await this.parturitionsService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListParturitionDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Parturitions - Lista um registro de parto'})
  async findOne(@Param('id') id: string) {
    return await this.parturitionsService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Edita um objeto',
    type: UpdateParturitionDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Parturitions - Edita um registro de parto'})
  async update(@Param('id') id: string, @Body() updateParturitionDto: UpdateParturitionDto) {
    return await this.parturitionsService.update(id, updateParturitionDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Remove um objeto',
    type: UpdateParturitionDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({summary: 'Parturitions - Remove um registro de parto'})
  async remove(@Param('id') id: string) {
    return await this.parturitionsService.remove(id);
  }
}
