import { Controller, Request, Get, Post, UseGuards, HttpCode, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { userInfo } from 'os';
import { AuthService } from './auth/auth.service';
import { User } from './user/user.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  /**
   * Simulates a login and returns a jwt token
   * Users are predefined in code since persisting them in db is beyond the scope of this
   * @param user user name and password used to log in 
   */
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() user: User) {
    return this.authService.login(user);
  }

  @HttpCode(303)
  @Get()
  async welcome() {
    return
  }
}
