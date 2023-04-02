import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deposit } from './schemas/deposit.schema';

@Injectable()
export class DepositRepository {
  constructor(
    @InjectModel(Deposit.name) private readonly depositModel: Model<Deposit>,
  ) {}

  async findAll(): Promise<Deposit[]> {
    return this.depositModel.find().exec();
  }

  async findByAddress(address: string): Promise<Deposit[]> {
    return this.depositModel.find({ address }).exec();
  }

  async findByToken(token: string): Promise<Deposit[]> {
    return this.depositModel.find({ token }).exec();
  }
}
