import { Injectable } from '@nestjs/common';
import { CreateAbortionDto } from './dto/create-abortion.dto';
import { UpdateAbortionDto } from './dto/update-abortion.dto';

@Injectable()
export class AbortionService {
  create(createAbortionDto: CreateAbortionDto) {
    return 'This action adds a new abortion';
  }

  findAll() {
    return `This action returns all abortion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} abortion`;
  }

  update(id: number, updateAbortionDto: UpdateAbortionDto) {
    return `This action updates a #${id} abortion`;
  }

  remove(id: number) {
    return `This action removes a #${id} abortion`;
  }
}
