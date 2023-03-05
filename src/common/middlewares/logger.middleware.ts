import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserService } from '../../users/users.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // any logic
    console.log('Logger middleware....');

    next();
  }
}

// export const loggerMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   // any logic
//   console.log('function Logger middleware....');
//   next();
// };
