import { Module } from '@nestjs/common';
import { VaccinationService } from './vaccination.service';
import { VaccinationController } from './vaccination.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vaccination, VaccinationSchema } from './entities/vaccination.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Vaccination.name,
        schema: VaccinationSchema
      }
    ])
  ],
  controllers: [VaccinationController],
  providers: [VaccinationService],
  exports: [VaccinationModule, VaccinationService]
})
export class VaccinationModule {}
