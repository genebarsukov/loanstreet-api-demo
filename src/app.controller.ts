import { Controller, Request, Get, Post, UseGuards, HttpCode, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @HttpCode(303)
  @Get()
  welcome() {
    return `API Documentation:
    <br>(This would usually contain a JSON payload with some metadata and the docs page would be separate but since the first thing
    you will probably do is pop this link into your browser to see what happens, and your browser does not render JSON well without an
    extension, here it is instead)
    <br><br>
    <div style="width: 133px; margin-left: 250px;">
    <marquee scrollamount="50" BEHAVIOR="alternate" DIRECTION="right">
      <a href="https://github.com/genebarsukov/loanstreet-api-demo#readme" target="_blank"> Please Read Me Too</a>
    </marquee>
    </div>
    <br>&nbsp&nbsp&nbsp&nbsp
    Please read the API documentation in the README.md.
    <br>&nbsp&nbsp&nbsp&nbsp
    Most Api requests require an auth header with a current bearer token.
    <br>&nbsp&nbsp&nbsp&nbsp
    You can try the sample requests below as long as you replace the bearer token with one that you get from the authentication request
    <br><br>&nbsp&nbsp&nbsp&nbsp

    Example API requests:
    <br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

    Authenticate
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    curl -X POST https://loanstreet-demo.herokuapp.com/login -d '{"username": "default_user", "password": "default_pass"}' -H "Content-Type: application/json"
    <br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

    Get all loans
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    curl -X GET https://loanstreet-demo.herokuapp.com/loan -H "Content-Type:application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlZmF1bHRfdXNlciIsInN1YiI6MywiaWF0IjoxNjE3MzA0OTA2LCJleHAiOjE2MTczMDY3MDZ9.8Rnu-GaUBYl5ieR0M5gAxxxND2q1hRl1kaP33izvCJM"
    <br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

    Get a specific loan by id
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    curl -X GET https://loanstreet-demo.herokuapp.com/loan/11 -H "Content-Type:application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlZmF1bHRfdXNlciIsInN1YiI6MywiaWF0IjoxNjE3MzA0OTA2LCJleHAiOjE2MTczMDY3MDZ9.8Rnu-GaUBYl5ieR0M5gAxxxND2q1hRl1kaP33izvCJM" 
    <br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

    Create a new loan
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    curl -X POST https://loanstreet-demo.herokuapp.com/loan -H "Content-Type:application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlZmF1bHRfdXNlciIsInN1YiI6MywiaWF0IjoxNjE3MzA0OTA2LCJleHAiOjE2MTczMDY3MDZ9.8Rnu-GaUBYl5ieR0M5gAxxxND2q1hRl1kaP33izvCJM" -d '{"amount": 990000,"interestRate": 15,"lengthMonths": 3,"monthlyPayment": 40000}'
    <br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

    Update a loan wholesale
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    curl -X PUT https://loanstreet-demo.herokuapp.com/loan/11 -H "Content-Type:application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlZmF1bHRfdXNlciIsInN1YiI6MywiaWF0IjoxNjE3MzA0OTA2LCJleHAiOjE2MTczMDY3MDZ9.8Rnu-GaUBYl5ieR0M5gAxxxND2q1hRl1kaP33izvCJM" -d '{"amount": 990000,"interestRate": 17,"lengthMonths": 12,"monthlyPayment": 69000}'
    <br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

    Update a loan partially
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    curl -X PATCH https://loanstreet-demo.herokuapp.com/loan/11 -H "Content-Type:application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlZmF1bHRfdXNlciIsInN1YiI6MywiaWF0IjoxNjE3MzA0OTA2LCJleHAiOjE2MTczMDY3MDZ9.8Rnu-GaUBYl5ieR0M5gAxxxND2q1hRl1kaP33izvCJM" -d '{"amount": 990000,"interestRate": 17,"lengthMonths": 3,"monthlyPayment": 69000}'
    <br><br><br>
    Here's some extra space so you can scroll
    <br><br><br><br><br><br><br><br><br>
    `
  }
}
