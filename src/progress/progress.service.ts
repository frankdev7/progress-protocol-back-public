import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { QuizDto } from './dto/quiz.dto';
import { MintDto } from './dto/mint.dto';
import { ethers } from 'ethers';
import * as IntroCrypto from './abi/IntroCrypto.json';
import * as dotenv from 'dotenv';
import { TransactionReponseDTO } from './dto/transaction.response.dto';
dotenv.config();

@Injectable()
export class ProgressService {
  async mint(mintDto: MintDto): Promise<TransactionReponseDTO> {
    const { address, courseAddress } = mintDto;
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.ALCHEMY_PROVIDER,
    );

    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const contract = new ethers.Contract(courseAddress, IntroCrypto, wallet);

    try {
      const mintTx = await contract.safeMint(address);
      const receipt = await mintTx.wait(); // Wait for the transaction receipt

      return { transaction: receipt.transactionHash };
    } catch (error) {
      throw new HttpException('Minting failed', HttpStatus.BAD_REQUEST); // Rethrow the error with a custom message
    }
  }

  async quiz(quizDto: QuizDto): Promise<TransactionReponseDTO> {
    const { address, courseAddress } = quizDto;
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.ALCHEMY_PROVIDER,
    );

    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const contract = new ethers.Contract(courseAddress, IntroCrypto, wallet);

    try {
      const mintTx = await contract.upLevel(address);
      const receipt = await mintTx.wait(); // Wait for the transaction receipt
      return { transaction: receipt.transactionHash };
    } catch (error) {
      throw new HttpException('Updating nft failed', HttpStatus.BAD_REQUEST); // Rethrow the error with a custom message
    }
  }
}
