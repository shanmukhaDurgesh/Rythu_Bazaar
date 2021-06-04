import { Component, Output, EventEmitter, OnInit, Inject  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginAuthenticationService } from 'src/app/login-authentication/login-authentication.service';
import menu from './../../../_files/menu.json'

@Component({
  selector: 'app-left-nav-menu',
  templateUrl: './left-nav-menu.component.html',
  styleUrls: ['./left-nav-menu.component.scss']
})
export class LeftNavMenuComponent implements OnInit {
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    showSubMenu: string;
    pushRightClass: string;
    showSystemMenu: string;
    sideMenu: any;
    defaultPagePermissions: any = [];
    loggedUserPermissions: any;
    loggedUserDetails: any = {};
    @Output() collapsedEvent = new EventEmitter<boolean>();
    userScreens: any;
    showJobMenu: string;
    showTeaAdminMenu: string;
    selectedMenu : string;
    // sideMenuList :any[] = [];
    mmenu: any[] = [];
    smenu: any[] = [];
    sbMenu: any;
    sdMainMenu: any[] = [];
    // sideMenuList : any[] = menu.Module
    sideMenuList : any[]
    menuItems: any;



    constructor(public router: Router, private loginAuthService: LoginAuthenticationService) {
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
      this.loginAuthService.getLoggedUserData().subscribe((res)=>{
          if(res){
              let selectedAcademy = []
              if(localStorage.getItem('s_ac')){
                  selectedAcademy = res['userAccountRoleMap'].filter((ele)=>{
                    ele.org = {}
                    ele.org['id'] = 1
                      return ele['org']['id'] == Number(localStorage.getItem('s_ac'));
                  });
                  this.menuItems =selectedAcademy[0]['menu'];
              }else{
                  this.menuItems = res['userAccountRoleMap'][0]['menu']
              }

          }

          console.log("menus", this.menuItems)
      })
      console.log(this.mmenu);

      this.isActive = false;
      this.collapsed = false;
      this.showMenu = '';
      this.showSubMenu = '';
      this.pushRightClass = 'push-right';
      this.toggleExpanded();
      this.addExpandClass('pages')
  }



  eventCalled() {
      this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
      this.collapsed = false
      this.collapsedEvent.emit(this.collapsed);
      this.selectedMenu = element
      }
      redirectTo(data){
          this.router.navigate([data.url,'hii'])
      }
  toggleCollapsed() {
      this.collapsed = false;
      this.collapsedEvent.emit(this.collapsed);
      //this.removeExpandClass();
  }

  removeExpandClass() {
      if ('Administration' === this.selectedMenu) {
          this.selectedMenu = '0';
      }
  }

  toggleExpanded() {
      this.collapsed = false;
      this.collapsedEvent.emit(this.collapsed);
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

  changeLang(language: string) {
      // this.translate.use(language);
  }

  onLoggedout() {
      localStorage.removeItem('isLoggedin');
  }


  toggleSideMenu() {
      if (this.collapsed) {
          //this.toggleExpanded();
          this.collapsed = false;
          this.collapsedEvent.emit(this.collapsed);

      } else {
          //this.toggleCollapsed();
          this.collapsed = true;
          this.collapsedEvent.emit(this.collapsed);
          this.removeExpandClass();
      }
  }

  navigateToThisUrl(menu){
      console.log('menu ...', menu)
      if(menu['attr1'] && menu['attr1'] != '/parent' && menu['attr1'] != '/child'){
      this.router.navigate([menu['attr1']], {state: {permissions: menu.subPermission, urlIs: '/generalAdmin/users'}});
      }
  }
}
