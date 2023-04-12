import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { IncomingsService } from './incomings.service';
import { CreateIncomingDto } from './dto/create-incoming.dto';
import { UpdateIncomingDto } from './dto/update-incoming.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListIncomingDto } from './dto/list-incoming.dto';

@ApiTags('incomings')
@Controller('incomings')
export class IncomingsController {
  constructor(private readonly incomingsService: IncomingsService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Cria um novo objeto',
    type: CreateIncomingDto,
    isArray: false
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'    
  })
  @ApiOperation({summary: 'Incomings - Cria um nova entrada de receita'})
  async create(@Body() createIncomingDto: CreateIncomingDto) {
    return await this.incomingsService.create(createIncomingDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListIncomingDto,
    isArray: true
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'    
  })
  @ApiOperation({summary: 'Incomings - Retorna uma lista de entradas de receita'})
  async findAll() {
    return await this.incomingsService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListIncomingDto,
    isArray: false
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'    
  })
  @ApiOperation({summary: 'Incomings - Retorna uma entrada de receita'})
  async findOne(@Param('id') id: string) {
    return await this.incomingsService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Edita um objeto',
    type: UpdateIncomingDto,
    isArray: false
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'    
  })
  @ApiOperation({summary: 'Incomings - Edita uma entrada de receita'})
  async update(@Param('id') id: string, @Body() updateIncomingDto: UpdateIncomingDto) {
    return await this.incomingsService.update(id, updateIncomingDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Remove um objeto',
    type: UpdateIncomingDto,
    isArray: false
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'    
  })
  @ApiOperation({summary: 'Incomings - Remove uma entrada de receita'})
  async remove(@Param('id') id: string) {
    return await this.incomingsService.remove(id);
  }
}
