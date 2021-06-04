import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService {

  private requests: HttpRequest<any>[] = [];

  constructor(private toasterService: ToastrService, private router: Router,  private modal: NgbModal) { }

  removeRequest(req: HttpRequest<any>) {
      const i = this.requests.indexOf(req);
      if (i >= 0) {
          this.requests.splice(i, 1);
      }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      this.requests.push(req);
      // console.log("No of requests--->" + this.requests.length);
      return Observable.create(observer => {
          const subscription = next.handle(req)
              .subscribe(
                  event => {
                      if (event instanceof HttpResponse) {
                          this.removeRequest(req);
                          observer.next(event);
                      }
                  },
                  err => {
                      console.log('err', err);
                  // alert('error returned');
                      this.removeRequest(req);
                      observer.error(err);
                      if (err.status === 401) {
                          this.modal.dismissAll();
                          this.requests = [];
                          if (err.error.message) {
                          this.toasterService.error(err.error.message, 'Failed');
                          }
                          localStorage.clear();
                          this.router.navigate(['/login/unauthorized']);
                      }
                  },
                  () => {
                      this.removeRequest(req);
                      observer.complete();
                  });
          // remove request from queue when cancelled
          return () => {
              this.removeRequest(req);
              subscription.unsubscribe();
          };
      });
  }
}
