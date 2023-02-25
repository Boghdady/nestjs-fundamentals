import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { UserService } from '../../users/users.service';

@Injectable()
export class WrapDataInterceptor implements NestInterceptor {
  // constructor(private readonly userService: UserService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // logic: Intercept request
    // console.log('Before, Request intercepting.....');

    return next.handle().pipe(
      map((data) => {
        // logic: Intercept response
        // console.log('After, Response intercepting.....', data);
        return { response: data };
      }),
    );
  }
}
