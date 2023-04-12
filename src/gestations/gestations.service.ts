import { Injectable } from '@nestjs/common';
import { CreateGestationDto } from './dto/create-gestation.dto';
import { UpdateGestationDto } from './dto/update-gestation.dto';

@Injectable()
export class GestationsService {
  create(createGestationDto: CreateGestationDto) {
    return 'This action adds a new gestation';
  }

  findAll() {
    return `This action returns all gestations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gestation`;
  }

  update(id: number, updateGestationDto: UpdateGestationDto) {
    return `This action updates a #${id} gestation`;
  }

  remove(id: number) {
    return `This action removes a #${id} gestation`;
  }
}
