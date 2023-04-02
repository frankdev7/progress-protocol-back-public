import { IsNotEmpty } from 'class-validator';

export class MintDto implements Readonly<MintDto> {
  @IsNotEmpty()
  readonly address: string;

  @IsNotEmpty()
  readonly courseAddress: string;
}
