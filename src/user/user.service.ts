import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
    private readonly users = [
        {
          userId: 1,
          username: 'john',
          password: 'changeme',
        },
        {
          userId: 2,
          username: 'maria',
          password: 'guess',
        },
        {
          userId: 3,
          username: 'default_user',
          password: 'default_pass',
        },
      ];
    
      async findOne(username: string): Promise<User | undefined> {
        let user = this.users.find(user => user.username === username)
        return this.users.find(user => user.username === username);
      }
    
}
