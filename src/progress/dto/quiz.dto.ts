import { IsNotEmpty } from 'class-validator';

export class QuizDto implements Readonly<QuizDto> {
  @IsNotEmpty()
  readonly address: string;

  @IsNotEmpty()
  readonly courseAddress: string;

  @IsNotEmpty()
  readonly points: number;
}
