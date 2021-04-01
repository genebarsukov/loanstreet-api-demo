import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Loan } from './loan.entity';

@Injectable()
export class LoanService {

    constructor(@InjectRepository(Loan) private loanRepository: Repository<Loan>) {}

    /**
     * Get a list of loans
     */
    async getAll(): Promise<Loan[]> {
        return await this.loanRepository.find();
     }

    /**
     * Get a loan by id
     * @param id loan id
     */
    async getLoan(id: number): Promise<Loan> {
        return await this.loanRepository.findOne(id);
     }

     /**
      * Create a new loan an return the new object
      * @param loan loan payload
      */
    async createLoan(loan: Loan): Promise<Loan> {
        return await this.loanRepository.save(loan)
            .then(() => this.loanRepository.findOne(loan.id))
    }

    /**
     * PATCH does a partial property update without replacing undspecified propertirs
     * @param loan partial loan payload
     */
    async patchLoan(loan: Loan): Promise<any> {
        let foundLoan = await this.loanRepository.findOne(loan.id)
        if (foundLoan) {
            await this.loanRepository.update({id: loan.id}, loan);
            return await this.loanRepository.findOne(loan.id);
        }
        return undefined
    }

    /**
     * PUT does a full object replacement
     * Properties not specified in the payload get wiped
     * @param loan partial loan payload
     */
    async putLoan(loan: Loan): Promise<Loan> {
        if (! loan.amount) loan.amount = undefined;
        if (! loan.interestRate) loan.interestRate = undefined;
        if (! loan.lengthMonths) loan.lengthMonths = undefined;
        if (! loan.monthlyPayment) loan.monthlyPayment = undefined

        let foundLoan = await this.loanRepository.findOne(loan.id)
        if (foundLoan) {
            await this.loanRepository.update({id: loan.id}, loan);
            return await this.loanRepository.findOne(loan.id);
        }
        return undefined
    }
}
