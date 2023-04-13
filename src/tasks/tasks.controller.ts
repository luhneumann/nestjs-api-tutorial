import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListAbortionDto } from 'src/abortion/dto/list-abortion.dto';
import { ListTaskDto } from './dto/list-task.dto';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Cria um objeto',
    type: CreateTaskDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre oi dados enviados'  
  })
  @ApiOperation({ summary: 'Tasks - Cria uma nova tarefa'})
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.tasksService.create(createTaskDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListAbortionDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre oi dados enviados'  
  })
  @ApiOperation({ summary: 'Tasks - Retorna uma lista de tarefas'})
  async findAll() {
    return await this.tasksService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListTaskDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre oi dados enviados'  
  })
  @ApiOperation({ summary: 'Tasks - Retorna uma tarefa'})
  async findOne(@Param('id') id: string) {
    return await this.tasksService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Edita um objeto',
    type: UpdateTaskDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre oi dados enviados'  
  })
  @ApiOperation({ summary: 'Tasks - Edita uma tarefa'})
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return await this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Remove um objeto',
    type: UpdateTaskDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre oi dados enviados'  
  })
  @ApiOperation({ summary: 'Tasks - Remove uma tarefa'})
  async remove(@Param('id') id: string) {
    return await this.tasksService.remove(id);
  }
}
