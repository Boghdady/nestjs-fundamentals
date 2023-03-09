import { Module, ValidationPipe } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { APP_PIPE } from '@nestjs/core';

import { CommonModule } from './common/common.module';

@Module({
  imports: [UsersModule, CommonModule],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }],
})
export class AppModule {}
