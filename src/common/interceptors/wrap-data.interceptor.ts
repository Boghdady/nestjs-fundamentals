import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class WrapDataInterceptor implements NestInterceptor {
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
