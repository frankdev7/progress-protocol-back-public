import { IsNotEmpty } from 'class-validator';

export class TransactionReponseDTO implements Readonly<TransactionReponseDTO> {
  @IsNotEmpty()
  readonly transaction: string;
}
