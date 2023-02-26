import {
  ClassSerializerInterceptor,
  Module,
  ValidationPipe,
} from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { WrapDataInterceptor } from './common/interceptors/wrap-data.interceptor';
import { CommonModule } from './common/common.module';

@Module({
  imports: [UsersModule, CommonModule],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },
    { provide: APP_PIPE, useClass: ValidationPipe },
    { provide: APP_INTERCEPTOR, useClass: WrapDataInterceptor },
  ],
})
export class AppModule {}
