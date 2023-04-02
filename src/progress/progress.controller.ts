import { Body, Controller, Post } from '@nestjs/common';
import { MintDto } from './dto/mint.dto';
import { ProgressService } from './progress.service';
import { QuizDto } from './dto/quiz.dto';
import { ethers } from 'ethers';
import { TransactionReponseDTO } from './dto/transaction.response.dto';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Post('/mint')
  async mint(@Body() mintDto: MintDto): Promise<TransactionReponseDTO> {
    return this.progressService.mint(mintDto);
  }

  @Post('/quiz')
  async quiz(@Body() quizDto: QuizDto): Promise<TransactionReponseDTO> {
    return this.progressService.quiz(quizDto);
  }
}
