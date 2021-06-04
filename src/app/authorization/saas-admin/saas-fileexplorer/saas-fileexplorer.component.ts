import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saas-fileexplorer',
  templateUrl: './saas-fileexplorer.component.html',
  styleUrls: ['./saas-fileexplorer.component.scss']
})
export class SaasFileexplorerComponent implements OnInit {

  documentList :any[] = [];
  check:boolean;
  inf: any;
  menu1 : string;
  mmenu: any[] = [];
  smenu: any[] = [];
  sbMenu: any;
  data = [{
    title: "Users", children: [
      { title: "uno-uno" }]
  },
  {
    title: "Programs", children: [
      { title: "dos-uno",children: [
      { title: "dos-uno" }]
       }, { title: "dos-dos" }]
  }
  ]

  sideMenuList  =[
    {
       "menName":"Users",
       "permissions":[
          "VIEW",
          "CREATE",
          "EDIT",
          "DELETE"
       ],
       "subMenus":[
          {
             "menuName":"Programs",
             "url":"/tea-admin/mb",
             "permissions":[
                "VIEW",
                "CREATE",
                "EDIT",
                "DELETE"
             ]
          },
          {
             "menuName":"Billings",
             "url":"/tea-admin/mbilling",
             "permissions":[
                "VIEW",
                "CREATE",
                "EDIT",
                "DELETE"
             ]
          },
          {
           "menuName":"Files",
           "url":"/tea-admin/mbillingfour",
           "permissions":[
              "VIEW",
              "CREATE",
              "EDIT",
              "DELETE"
           ]
        }
       ]
    },
    {
       "menName":"File list1",
       "url":"/menu2",
       "permissions":[
          "VIEW",
          "CREATE",
          "EDIT",
          "DELETE"
       ],
       "subMenus":[
          {
             "menuName":"menu2-sub1",
             "url":"menu2/sub-menu1",
             "permissions":[
                "VIEW",
                "CREATE",
                "EDIT",
                "DELETE"
             ]
          },
          {
             "menuName":"File list2",
             "url":"menu2/sub-menu2",
             "permissions":[
                "VIEW",
                "CREATE",
                "EDIT",
                "DELETE"
             ]
          }
       ]
    },
    {
       "menName":"File list2",
       "url":"/menu3",
       "subMenus":[
          
       ],
       "permissions":[
          "VIEW",
          "CREATE",
          "EDIT",
          "DELETE"
       ]
    }
 ]
  collapsed: boolean;
  

  constructor() { }

  ngOnInit() {
    this.collapsed = false;
    this.sideMenuList.forEach(e => {           
      this.sbMenu = e.subMenus
      let reqObj = {
          "menuItems" : e.menName,
          "menuUrl" : e.url,
          "subMenus":this.sbMenu
      }
      this.mmenu.push(reqObj)
  })
  console.log(this.mmenu);
    this.documentList = [
      {
      'FirstName' : 'UserManual.doc',
      'LastModifiedBy' : 'Admin',
      'LastModifiedTime' : '24-08-2020 1:23 AM EST'
    },
    {
      'FirstName' : 'FAQ.doc',
      'LastModifiedBy' : 'Admin',
      'LastModifiedTime' : '24-08-2020 1:23 AM EST'
    },
    {
      'FirstName' : 'ScreenShots',
      'LastModifiedBy' : 'Admin',
      'LastModifiedTime' : '24-08-2020 1:23 AM EST'
    },
    {
      'FirstName' : 'FAQ.doc',
      'LastModifiedBy' : 'Admin',
      'LastModifiedTime' : '24-08-2020 1:23 AM EST'
    }
  ]
  }

  addExpandClass(element: any) {
    this.collapsed = false
         if (element === 'Users') {
            if (element === this.menu1) {
                this.menu1 = '0';
            } else {
                this.menu1 = 'Users';
            }
        }
    }
}
