import { Injectable } from '@nestjs/common';
import { CreateParturitionDto } from './dto/create-parturition.dto';
import { UpdateParturitionDto } from './dto/update-parturition.dto';

@Injectable()
export class ParturitionsService {
  create(createParturitionDto: CreateParturitionDto) {
    return 'This action adds a new parturition';
  }

  findAll() {
    return `This action returns all parturitions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parturition`;
  }

  update(id: number, updateParturitionDto: UpdateParturitionDto) {
    return `This action updates a #${id} parturition`;
  }

  remove(id: number) {
    return `This action removes a #${id} parturition`;
  }
}
