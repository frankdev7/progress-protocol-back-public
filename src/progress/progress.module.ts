import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepositRepository } from './deposit.repository';
import { ProgressController } from './progress.controller';
import { ProgressService } from './progress.service';
import { Deposit, DepositSchema } from './schemas/deposit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Deposit.name, schema: DepositSchema }]),
  ],
  controllers: [ProgressController],
  providers: [ProgressService, DepositRepository],
})
export class ProgressModule {}
