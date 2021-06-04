import { HttpEvent, HttpHandler, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AppConfig } from '../constants/app.config';
import { tap } from 'rxjs/operators';
import { LoaderInterceptorService } from './loader-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService {

  private requests: HttpRequest<any>[] = [];
  constructor(private loaderService: LoaderInterceptorService, private toasterService: ToastrService, private router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if ((req.url.search(AppConfig.ACCESS_TOKEN_PATH) > -1)) {

              let headers = new HttpHeaders({
                  'Authorization': 'Basic TUJBcHA6TUJBcHBAMTIz',
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Cache-Control': 'no-cache',
              });
              let authReq = req.clone({ headers });
              return next.handle(authReq);
      }else{
          if ((req.url.search(AppConfig.GET_LOGGED_USER_DETAILS) <= 0)) {
          const tkn = localStorage.getItem('at');
          let headers = new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + (tkn ? tkn : ''),
              // 'Organization' : localStorage.getItem('s_ac') ? localStorage.getItem('s_ac') : '',
              // 'Country' : localStorage.getItem('country') ? localStorage.getItem('country') : ''
          });
          let authReq = req.clone({ headers });
              return next.handle(authReq);
      }else{
          const tkn = localStorage.getItem('at');
          let headers = new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + (tkn ? tkn : ''),
          });
          let authReq = req.clone({ headers });
              return next.handle(authReq);
      }
      }

      return next.handle(req).pipe(tap(event => {
          if (event instanceof HttpResponse) {
              // console.log('Succeed API Call', event);
          }
      }, error => {
          if (event instanceof HttpResponse) {
              console.log('Error API Call:', event);
          }
      }
      ));
  }
}
