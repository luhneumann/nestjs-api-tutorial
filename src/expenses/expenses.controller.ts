import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListAbortionDto } from 'src/abortion/dto/list-abortion.dto';
import { ListExpenseDto } from './dto/list-expense.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('expenses')
@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}
  
  @Post()
  @ApiResponse({
    status: 200,
    description: 'Cria um objeto',
    type: CreateExpenseDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados' 
  })
  @ApiOperation({summary: 'Expenses - Cria um novo registro de despesa'})
  async create(@Body() createExpenseDto: CreateExpenseDto) {
    return await this.expensesService.create(createExpenseDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListExpenseDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados' 
  })
  @ApiOperation({summary: 'Expenses - Retorna uma lista de registros de despesas'})
  async findAll() {
    return await this.expensesService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListExpenseDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados' 
  })
  @ApiOperation({summary: 'Expenses - Retorna um registro de despesa'})
  async findOne(@Param('id') id: string) {
    return await this.expensesService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Edita um objeto',
    type: UpdateExpenseDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados' 
  })
  @ApiOperation({summary: 'Expenses - Edita um registro de despesa'})
  async update(@Param('id') id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
    return await this.expensesService.update(id, updateExpenseDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Deleta um objeto',
    type: UpdateExpenseDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados' 
  })
  @ApiOperation({summary: 'Expenses - Deleta um registro de despesa'})
  async remove(@Param('id') id: string) {
    return await this.expensesService.remove(id);
  }
}
