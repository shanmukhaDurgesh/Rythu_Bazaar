import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAuthenticationService } from 'src/app/login-authentication/login-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivateChild {
  constructor(private loginAuthService: LoginAuthenticationService) {

  }
  ngOnInit(): void {


  }

  reCallLoggedUserData() {
    const obj = {
        email: localStorage.getItem('lu'),
        isInternal:  true
      };
    this.loginAuthService.getLoggedUserDetails(obj).subscribe((res) => {
            console.log('res', res);
            this.loginAuthService.setLoggedUserData(res);
            // this.router.navigate(['/generalAdmin/users']);
            let finalRouterArray = [];
            const menus = res.menu;
            const tempMenus = [];
            menus.forEach(element => {
             if (element.childPermissions) {
              if (element.childPermissions.length <= 0) {
                tempMenus.push(element);
               } else {
                element.childPermissions.forEach(ele => {
                  tempMenus.push(ele);
                });
               }
             } else {
              tempMenus.push(element);
             }

            });
            console.log('tempMenus', tempMenus);
            if (tempMenus.length > 0) {
             finalRouterArray = tempMenus.filter((element) => {
               return element.permissionId ===  '/sassportal/dashboard';
              });
             console.log('finalRouterArray', finalRouterArray);
            } else {
              return false;
            }
          });
    }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('next url', state, next);
      return true;
  }

}
