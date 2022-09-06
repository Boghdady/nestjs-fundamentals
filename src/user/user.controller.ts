import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  findAllUsers(): string[] {
    return ['Ahmed', 'khaled', 'fatma'];
  }

  @Post()
  createUser(): string {
    return 'Create new user';
  }
}
