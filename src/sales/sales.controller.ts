import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListSaleDto } from './dto/list-sale.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('sales')
@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Cria um objeto',
    type: CreateSaleDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados' 
  })
  @ApiOperation({summary: 'Sales - cria um novo registro de venda'})
  async create(@Body() createSaleDto: CreateSaleDto) {
    return await this.salesService.create(createSaleDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListSaleDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados' 
  })
  @ApiOperation({summary: 'Sales - retorna uma lista de vendas'})
  async findAll() {
    return await this.salesService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: UpdateSaleDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados' 
  })
  @ApiOperation({summary: 'Sales - Retorna um registro de venda'})
  async findOne(@Param('id') id: string) {
    return await this.salesService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Edita um objeto',
    type: UpdateSaleDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados' 
  })
  @ApiOperation({summary: 'Sales - edita um registro de venda'})
  async update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return await this.salesService.update(id, updateSaleDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Cria um objeto',
    type: UpdateSaleDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados' 
  })
  @ApiOperation({summary: 'Sales - Remove um registro de venda'})
  async remove(@Param('id') id: string) {
    return await this.salesService.remove(id);
  }
}
