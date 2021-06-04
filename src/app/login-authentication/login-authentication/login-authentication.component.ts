import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginAuthenticationService } from '../login-authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-authentication',
  templateUrl: './login-authentication.component.html',
  styleUrls: ['./login-authentication.component.scss']
})
export class LoginAuthenticationComponent implements OnInit {
  userName: string;
  userPassword: string;
  intervalTimer: any;
  isAcademyChange: boolean;
  constructor(private router: Router,private activeRouter: ActivatedRoute,
    private loginUserService: LoginAuthenticationService, private toastService: ToastrService) { }

  ngOnInit() {
    this.isAcademyChange = false;
     const x =   this.activeRouter
     .data
     .subscribe(v => console.log('v', v));
     if (localStorage.getItem('at') && localStorage.getItem('rt') && localStorage.getItem('et') && localStorage.getItem('lu')) {

         if (Object.keys(this.activeRouter.snapshot.params).length > 0) {
           this.isAcademyChange = true;
           // alert('hello')
           this.getPermissionsForSelectedAcademy();
         } else {
           this.userName  = localStorage.getItem('lu');
           this.loginUserService.getLoggedUserData().subscribe((res) => {
             if (res == null ) {
               this.getLoggedUserData();
             }
           });
         }
       }else{
         clearInterval(this.intervalTimer);
       }
  }

  // onLogin(loginForm){
  //  if(loginForm.valid){
  //    localStorage.setItem('isAuthorized', 'true');
  //    localStorage.setItem('at', this.token);
  //    this.router.navigate(['/m1'])
  //  }else{
  //   localStorage.setItem('isAuthorized', 'false')
  //  }
  // }

  onLoginAuth(loginForm) {
    if (!loginForm.valid) {
      this.toastService.warning('Please Enter Credentials', 'Warning');
      return false;
    }
    const tokenObj =  'username=' + this.userName + '&password=' + this.userPassword + '&grant_type=password';
    this.loginUserService.getAccessToken(tokenObj).pipe(first()).subscribe(res => {
     // console.log(res);
      localStorage.setItem('at', res.access_token);
      localStorage.setItem('rt', res.refresh_token);
      localStorage.setItem('et', res.expires_in);
      localStorage.setItem('lu', this.userName);
      localStorage.setItem('lup', this.userPassword);
      if (res['access_token']) {
        this.getLoggedUserData();
      } else {
        localStorage.clear();
        // this.router.navigate(['/login']);
        this.toastService.warning('Please try again', 'Warning');
      }
    }, (error) => {
      this.toastService.error(error.error_description, 'Failed');
    });
  }

  refreshAccessToken(): void {
    const tokenObj =  'username=' + localStorage.getItem('lu') + '&password=' + localStorage.getItem('lup') + '&grant_type=password';
    this.loginUserService.getAccessToken(tokenObj).pipe(first()).subscribe(res => {
            console.log(res);
            localStorage.setItem('at', res.access_token);
            localStorage.setItem('rt', res.refresh_token);
            localStorage.setItem('et', res.expires_in);
            if (res.access_token) {
                console.log('---refresh token---');
            } else {
              this.toastService.warning('Please try again', 'Warning');
            }

          }, (error) => {
            this.toastService.error(error.error_description, 'Failed');
          });
  }

  getLoggedUserData() {
    const userObj = {
      email: localStorage.getItem('lu'),
      isInternal: true
    };
    this.loginUserService.getLoggedUserDetails(userObj).subscribe((res) => {
      this.loginUserService.setLoggedUserData(res);
      localStorage.setItem("loggedUserData",JSON.stringify(res)); // currently on refresh the data is clearing when we store in observable
      localStorage.setItem("loggedUserId",res['id']);
      this.buildMenuItemsForCurrentUser(res);
    });
    let expireTime =Number(localStorage.getItem('et'));
    clearInterval(this.intervalTimer);
    this.intervalTimer = setInterval( () => {
          this.refreshAccessToken();
        }, 4320000 * 1000);

  }

  buildMenuItemsForCurrentUser(loggedData) {
    //console.log('l bid Menu Items', loggedData)
    // let academyId = loggedData['userAccountRoleMap'][0]['org']['id'];
    // let countryId = loggedData['userAccountRoleMap'][0]['org']['addressList'][0]['country'].countryName;
    let academyId : any = 1;
    localStorage.setItem('s_ac', academyId); // for Dynamaic initial academy id values
    // localStorage.setItem('country',countryId)
    localStorage.setItem('isAuthorized', 'true');
    localStorage.setItem('un', loggedData['name'])
    if(loggedData['resetPassword'] ){
      this.router.navigate(['/login/reset_password'], {queryParams: {welcomeUser: true} })
    }else{
      this.navigatePage(loggedData);
    }

  }

  changeUserType() {

  }

  getPermissionsForSelectedAcademy() {
    let id = null;
    const orgs = [];
    this.loginUserService.getLoggedUserData().subscribe((lu_data) => {
      id = lu_data.id;
    });
    if (localStorage.getItem('s_ac')) {
      let tempSelectedAcademy = [];
      this.loginUserService.getLoggedUserData().subscribe((res)=>{
        if (res) {
            this.navigatePage(res);
        } else {
          this.getLoggedUserData();
        }

      });

   }

  }

  navigatePage(loggedData){
    const tempSelectedAcademy = loggedData.userAccountRoleMap.filter((ele) => {
     // console.log('orgId', ele.org.id),
     // console.log('s_ac', localStorage.getItem('s_ac'));
     ele.org = {}
     ele.org['id'] = 1
      return  ele.org.id == localStorage.getItem('s_ac');
    });

    console.log('tem', tempSelectedAcademy);

    if (tempSelectedAcademy.length > 0) {
      const menus = tempSelectedAcademy[0]['menu'];
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
      console.log('tempMenu login', tempMenus)
      if (tempMenus.length>0) {
        let flag = false;
        tempMenus.forEach(element => {
          if(!flag && element['attr1']){

            flag = true;
            this.router.navigate([element['attr1']], {state: {permissions: element['subPermission']}})
          }

        });

      } else {
        this.toastService.warning('No Menus found for the selected Academy', 'Warning')
        console.log('hello');
      }
    }else{
      // this.toastService.warning('No Academies found', 'Warning')
    }
  }
}
