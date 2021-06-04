import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAuthenticationService } from 'src/app/login-authentication/login-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  currentUrl: string;

  constructor(private router: Router,private loginAuthService: LoginAuthenticationService) {
    this.currentUrl =  this.router.routerState.snapshot.url;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('isAuthorized') == 'true') {
      this.reCallLoggedUserData();
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  reCallLoggedUserData() {
    const obj = {
        email: localStorage.getItem('lu'),
        isInternal:  true
      };
    this.loginAuthService.getLoggedUserDetails(obj).subscribe((res) => {
            console.log('res', res);
            this.loginAuthService.setLoggedUserData(res);
            localStorage.setItem("loggedUserData",JSON.stringify(res)); // currently on refresh the data is clearing when we store in observable
            // this.router.navigate(['/generalAdmin/users']);
            this.checkAcademyPermission(res);

          });
    }
    checkAcademyPermission(res){
      let tempSelectedAcademy = [];
      console.log('acheck ac', res)
            if(localStorage.getItem('s_ac')){
              tempSelectedAcademy = res['userAccountRoleMap'].filter((ele)=>{
                return ele['org']['id']  == Number(localStorage.getItem('s_ac'))
              })
              if(tempSelectedAcademy.length>0){
                this.toValidateUrl(tempSelectedAcademy[0]);
              }else{
                return false;
              }
            }else{
              this.toValidateUrl(res['userAccountRoleMap'][0])
            }
    }

    toValidateUrl(academyData){
       if(this.currentUrl != '' && this.currentUrl != '/login'){
            let finalRouterArray = [];
            const menus = academyData['menu'];
            const tempMenus = [];
            menus.forEach(element => {
             if (element.childPermissions) {
              if (element.childPermissions.length <= 0) {
                if(element['isMenu'] == true || element['isMenu'] == 'true'){
                  tempMenus.push(element);
                }

               } else {
                element.childPermissions.forEach(ele => {
                  if(ele['isMenu'] == true || ele['isMenu'] == 'true'){
                  tempMenus.push(ele);
                }
                });
               }
             } else {
              tempMenus.push(element);
             }

            });
           // console.log('tempMenus', tempMenus);
            if (tempMenus.length > 0) {
              if(this.currentUrl != ''){
                finalRouterArray = tempMenus.filter((element) => {
                  return element.attr1 ==   this.currentUrl ;//'/sassportal/academyview';  //this.currentUrl
                  });
                }else{
                  finalRouterArray = [tempMenus[0]];
                }
           //  console.log('finalRouterArray', finalRouterArray);
             if (finalRouterArray.length > 0) {
              //  this.router.navigate(['/generalAdmin/users1'], {state: {permissions: ['x', 'y', 'z']}}); // For Static URL
              //  this.router.navigate([finalRouterArray[0]['attr1']], {state: {permissions: finalRouterArray[0]['subPermission']}}); // For Static URL
               return true;
             } else {
               this.router.navigate(['/login']);
               return false;
             }
            } else {
              return false;
            }
          }else{
            return true;
          }
    }
}
