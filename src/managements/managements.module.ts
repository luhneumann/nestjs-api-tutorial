import { Module } from '@nestjs/common';
import { ManagementsService } from './managements.service';
import { ManagementsController } from './managements.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Management, ManagementSchema } from './entities/management.entity';

@Module({
  imports:[    
    MongooseModule.forFeature([
      {
        name: Management.name,
        schema: ManagementSchema
      }
    ])     
  ],
  controllers: [ManagementsController],
  providers: [ManagementsService],
  exports:[ManagementsModule, ManagementsService]
})
export class ManagementsModule {}
