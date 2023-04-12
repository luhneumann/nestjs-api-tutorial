import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbortionService } from './abortion.service';
import { CreateAbortionDto } from './dto/create-abortion.dto';
import { UpdateAbortionDto } from './dto/update-abortion.dto';

@Controller('abortion')
export class AbortionController {
  constructor(private readonly abortionService: AbortionService) {}

  @Post()
  create(@Body() createAbortionDto: CreateAbortionDto) {
    return this.abortionService.create(createAbortionDto);
  }

  @Get()
  findAll() {
    return this.abortionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abortionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbortionDto: UpdateAbortionDto) {
    return this.abortionService.update(+id, updateAbortionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.abortionService.remove(+id);
  }
}
