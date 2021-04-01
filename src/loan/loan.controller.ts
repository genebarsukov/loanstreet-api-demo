import { Body, Controller, Get, NotFoundException, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Loan } from './loan.entity';
import { LoanService } from './loan.service';

@Controller('loan')
export class LoanController {
    constructor(private loanService: LoanService) {}

    /**
     * POST a new loan
     * @param loan loan payload
     */
    // @UseGuards(AuthGuard('jwt'))
    @Post()
    async createLoan(@Body() loan: Loan) {
      return await this.loanService.createLoan(loan);
    }

    /**
     * Get all loans
     */
    // @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll() {
      return await this.loanService.getAll();
    }

    /**
     * Get a single loan
     * @param id loan id
     */
    // @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getLoan(@Param('id') id: string) {
      let res =  await this.loanService.getLoan(parseInt(id, 10));
      if (!res) {
        throw new NotFoundException();
      }
      return res
    }

    /**
     * Perform a complete replacement of a loan
     * @param id loan id
     * @param loan partial loan payload
     */
    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async putLoan(@Param('id') id: string, @Body() loan: Loan) {
      loan.id = parseInt(id, 10);
      let res = await this.loanService.putLoan(loan);
      if (!res) {
        throw new NotFoundException();
      }
      return res;
    }

    /**
     * Perform a partial property update of a loan
     * @param id loan id
     * @param loan loan object
     */
    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async patchLoan(@Param('id') id: string, @Body() loan: Loan) {
      loan.id = parseInt(id, 10);
      let res = await this.loanService.patchLoan(loan);
      if (!res) {
        throw new NotFoundException();
      }
      return res;
    }

}
