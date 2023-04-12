import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GestationsService } from './gestations.service';
import { CreateGestationDto } from './dto/create-gestation.dto';
import { UpdateGestationDto } from './dto/update-gestation.dto';

@Controller('gestations')
export class GestationsController {
  constructor(private readonly gestationsService: GestationsService) {}

  @Post()
  create(@Body() createGestationDto: CreateGestationDto) {
    return this.gestationsService.create(createGestationDto);
  }

  @Get()
  findAll() {
    return this.gestationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gestationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGestationDto: UpdateGestationDto) {
    return this.gestationsService.update(+id, updateGestationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gestationsService.remove(+id);
  }
}
