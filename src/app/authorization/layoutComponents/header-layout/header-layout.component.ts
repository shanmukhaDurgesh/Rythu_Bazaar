import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginAuthenticationService } from 'src/app/login-authentication/login-authentication.service';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent implements OnInit {

  public pushRightClass: string;
  loggedUser = localStorage.getItem('loggedUserName');
  @Input('sidebar') sidebar;
  loggedUserPermissions: any;
  loggedUserDetails: any;
  loggedUserTitleLetters: string = '';
  public prfBool = false;
  loggedUserPrf : string;
  selectedLanguage:any;
  loggedUserName: string;
  languages = [
      {name: 'English', code: 'en'},
      {name: 'Spanish', code: 'es'}
  ];
  selectedAcedmy;
  academyList: any = [];
  academyDrop: boolean;
  roleDisplayName: any;
  totalAcademyList: any[] = [];
  photo: any;

  constructor( public router: Router, private loginService: LoginAuthenticationService) {

    this.router.events.subscribe(val => {
        if (
            val instanceof NavigationEnd &&
            window.innerWidth <= 992 &&
            this.isToggled()
        ) {
            this.toggleSidebar();
        }
    });
}

ngOnInit() {
    console.log("header" + (localStorage.getItem('userType') == 'saas'));
    this.academyDrop = localStorage.getItem('userType') == 'saas'
    if (localStorage.getItem('s_ac')) {
        this.selectedAcedmy = localStorage.getItem('s_ac');
    } else {
      this.selectedAcedmy = this.academyList[0].name;
    }

    this.loginService.getLoggedUserData().subscribe((res)=>{
        if(res){
          if(res['userAccountRoleMap'].length>0){
              this.academyList = [];
              this.totalAcademyList = [];
              res['userAccountRoleMap'].forEach(element => {
                element.org = {}
                element.org['id'] = 1
                  let obj = {
                      id: element['org']['id'],
                      name: element['org']['name']
                  }
                  this.academyList.push(obj)
                  this.totalAcademyList.push(element.org)
              });
              // let academyTax = this.totalAcademyList.filter((each: any) => {
              //   return each.id == parseInt(this.selectedAcedmy);
              // });
              // localStorage.setItem('academyTax', academyTax[0].tax)
              // localStorage.setItem('academyCurrency', JSON.stringify(academyTax[0].currency))
              // this.photo =academyTax[0].logo != undefined ? "data:image/png;base64,"+academyTax[0].logo : undefined
            }
       }else{
           this.loginService.getLoggedUserDetails({'email': localStorage.getItem('lu'), 'isInternal': true}).subscribe((res)=>{
              if(res['userAccountRoleMap'].length>0){
                  this.academyList = [];
                  this.totalAcademyList = [];
                  res['userAccountRoleMap'].forEach(element => {
                    element.org = {}
                    element.org['id'] = 1
                      let obj = {
                          id: element['org']['id'],
                          name: element['org']['name']
                      }
                      this.academyList.push(obj)
                      this.totalAcademyList.push(element)
                  });
                  // let academyTax = this.totalAcademyList.filter((each: any) => {
                  //   return each.id == parseInt(this.selectedAcedmy);
                  // });
                //   if(academyTax.length>0){
                //     localStorage.setItem('academyTax', academyTax[0]['tax'])

                //     localStorage.setItem('academyCurrency', JSON.stringify(academyTax[0].currency))
                //     this.photo =academyTax[0].logo != undefined ? "data:image/png;base64,"+academyTax[0].logo : undefined
                //  }
                }
           })
       }
    })
    if(JSON.parse(localStorage.getItem('loggedUserData'))['userAccountRoleMap'][0].role.name){
    this.roleDisplayName = JSON.parse(localStorage.getItem('loggedUserData'))['userAccountRoleMap'][0].role.name;
    }
    this.loggedUserName = localStorage.getItem('lu');
    this.selectedLanguage = 'en';
    this.loggedUserPrf = 'ShanmukhDurgesh18@gmail.com'
    this.pushRightClass = 'push-right';
}
userDropDown(){
  this.prfBool = !this.prfBool;
}
isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
}

toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
}

rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
}


  // get activeLanguage() {
  //     return this.translate.languageCode == "en" ? "English" : "Français";
  // }

  onLogout(){
      localStorage.clear();
      this.router.navigate(['/login'])
  }

}
