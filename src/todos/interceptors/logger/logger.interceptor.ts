import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { delay, Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<void> {
    console.log('Interceptor before request');
    return next.handle().pipe(
      delay(2000),
      tap(() => console.log('Interceptor after request')),
    );
  }
}
