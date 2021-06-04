// For Dev Environment use this property


// import {environmentprod} from 'src/environments/environment.prod'; //For Producation Environment use this property
import { HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import Swal from 'sweetalert2';


export class AppConfig {
    public static httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, PATCH, OPTIONS, DELETE',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'sessionid': localStorage.session_id
        })
    };

    public static ACCESS_TOKEN_PATH = 'oauth/token';
    public static ACCESS_TOKEN = 'access_token';


    public static BASE_URL = environment.baseURL;  // For Dev Environment use this property

    public static FORGOT_PASSWORD = 'unauth/forgotPassword';
    public static CHANGE_PASSWORD_BY_USERNAME = 'api/portalsecurity/changePassword';
    public static UPDATE_PASSWORD_BY_TOKEN = 'unauth/updateUserPasswordByToken';
    public static CHECK_RESET_TOKEN = 'unauth/getUserByResetToken';
    public static UPDATE_PWD = 'api/portalsecurity/changePassword';


    public static GET_LOGGED_USER_DETAILS_BY_ACADEMY = 'api/portalsecurity/getUserDetailsByAcademy';
    public static GET_LOGGED_USER_DETAILS = 'api/portalsecurity/getLoggedUserDetails';


    public static GET_ALL_EMPLOYEES = 'api/registration/employee/getall';
    public static CREATE_EMPLOYEE = 'api/registration/employee/create';
    public static GET_ALL_DISTRICTS = 'api/metadata/getalldistrictsbystate';
    public static GET_ALL_STATES = 'api/metadata/getallstates';
    public static GET_ALL_RBG = 'api/metadata/getallbazarsbydistrict';
    public static SEARCH = 'api/metadata/search';
    public static UPDATE_EMPLOYEE = 'api/registration/employee/update';
    public static GET_EMPLOYEE_BY_ID = 'api/registration/employee/getbyid';
    public static DELETE_EMPLOYEE= 'api/registration/employee/delete'

    // leaves
    public static GET_ALL_LEAVE_DETAILS = 'api/leave/getAllLeaveDetails';
    public static CREATE_NEW_LEAVE = 'api/leave/createNewLeave';
    public static UPDATE_LEAVE_STATUS = 'api/leave/updateleaveStatus'

    public static GRID_PAGE_INFO = {
        'initpageSize': 100,
        'pageOptions': [100, 150, 200]
    }

    public static  alertDialogue = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      public static PAGE_ACTIONS = {
        create: 'CREATE',
        view: 'VIEW',
        delete: 'DELETE',
        edit: 'EDIT',
     }


}
