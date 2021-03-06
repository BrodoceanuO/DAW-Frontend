import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError,  Observable, throwError } from 'rxjs';

export const retryCount = 3;
export const retryWaitMilliSeconds = 1000;

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {



  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
    console.log(request);
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      console.log(error.status, error.error.message)
      return throwError(error);
    }));
  }
}
