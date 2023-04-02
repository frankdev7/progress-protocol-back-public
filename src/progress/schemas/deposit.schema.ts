import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DepositSchema = Deposit & Document;

@Schema({ timestamps: true })
export class Deposit {
  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  token: string;

  @Prop({ required: true })
  amount: string;
}

export const DepositSchema = SchemaFactory.createForClass(Deposit);
