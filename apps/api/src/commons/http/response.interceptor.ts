import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiListResponseDto, ApiResponseDto } from './response.dto';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T> {
  /**
   * Intercept the response and standardize the format
   * @param _context {ExecutionContext}
   * @param next {CallHandler}
   * @returns { success: boolean, code: number, data: Response<T>, timestamp: string }
   */
  intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponseDto<T> | ApiListResponseDto<T>> {
    const timestamp = new Date().getTime();
    return next.handle().pipe(
      map((data) => ({
        success: true,
        code: HttpStatus.OK,
        data,
        timestamp,
      })),
    );
  }
}
