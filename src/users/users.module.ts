import { Module } from '@nestjs/common';
import { UsersController } from './usersController';

@Module({
  controllers: [UsersController],
})
export class UsersModule {}
