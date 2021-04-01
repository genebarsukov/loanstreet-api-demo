import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LoanModule } from './loan/loan.module';
import { PostgresService } from './postgres/postgres.service';

@Module({
  imports: [UserModule, AuthModule, LoanModule],
  controllers: [AppController],
  providers: [AppService, PostgresService],
})
export class AppModule {}
