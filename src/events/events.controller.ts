import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListAnimalDto } from 'src/animals/dto/list-animal.dto';
import { ListEventDto } from './dto/list-event.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Cria um novo objeto',
    type: CreateEventDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Events - Cria um novo evento'})
  async create(@Body() createEventDto: CreateEventDto) {
    return await this.eventsService.create(createEventDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de objetos',
    type: ListEventDto,
    isArray: true
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Events - Retorna uma lista de eventos'})
  async findAll() {
    return await this.eventsService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListEventDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Events - Retorna um evento'})
  async findOne(@Param('id') id: string) {
    return await this.eventsService.findOne(id);
  }

  @Get('details/:event_id')
  @ApiResponse({
    status: 200,
    description: 'Retorna um objeto',
    type: ListEventDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Events - Retorna um evento'})
  async findEachEvent(@Param('event_id') event_id: string) {
    return await this.eventsService.findEachEvent(event_id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Edita um objeto',
    type: UpdateEventDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Events - Edita um evento '})
  async update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return await this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Remove objeto',
    type: UpdateEventDto,
    isArray: false
  })
  @ApiResponse({
    status: 400,
    description: 'Retorna uma mensagem de erro sobre os dados enviados'
  })
  @ApiOperation({ summary: 'Events - Remove um evento'})
  async remove(@Param('id') id: string) {
    return await this.eventsService.remove(id);
  }
}
