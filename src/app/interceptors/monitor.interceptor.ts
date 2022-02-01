import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { concatMap, delay, Observable, of, retry, retryWhen, throwError } from 'rxjs';
import { retryWaitMilliSeconds } from './http-errors.interceptor';

export const retryCount = 3;

@Injectable()
export class MonitorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retryWhen(error => 
        error.pipe(
          concatMap((error, count) => {
            if (count <= retryCount && error.status == 503) {
              return of(error);
            }
            return throwError(error);
          }),
          delay(retryWaitMilliSeconds)
        )
      )
    )
  }
}
