import { Module } from '@nestjs/common';
import { UsersController } from './usersController';
import { UserService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
