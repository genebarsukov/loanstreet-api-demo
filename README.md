
## Description
This is a simple API with 2 routes (`/login` and `/loan`) and 2 controllers. The reason for the `/login` route is to add a bit of auth to not just leave the app open to the internet

## Usage
The app is hosted on Heroku. at `https://loanstreet-demo.herokuapp.com/`
1. Send a POST to `https://loanstreet-demo.herokuapp.com/login` with the payload `{"username": "default_user", "password": "default_pass"}`
2. Copy the returned bearer token and add it to your request auth header: `'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsIn....'`
3. Send a GET to `https://loanstreet-demo.herokuapp.com/loan` to see all loans
4. Send a GET to `https://loanstreet-demo.herokuapp.com/loan/3` to see an individual loan by id (sequential ids are only used due to time constaints)
5. Send a post to `https://loanstreet-demo.herokuapp.com/loan` with the payload 
```{{
    "amount": 990000,
    "interestRate": 15,
    "lengthMonths": 3,
    "monthlyPayment": 200,
    "id": 8
}}
```
6. You can also send a PUT and a PATCH with a partial payload. PUT replaces the object. PATCH just updates the specified object props.

```bash
$ npm install
```

## Running the app on local

```bash
$ npm install

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

