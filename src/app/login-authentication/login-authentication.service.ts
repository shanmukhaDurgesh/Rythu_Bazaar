import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConfig } from '../common-shared/constants/app.config';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationService {

  constructor(private http: HttpClient){}
  public subject = new BehaviorSubject(null);
  public menuSubject = new BehaviorSubject(null);

 //To get logged user details
  getLoggedUserDetails(req: any): Observable<any> {
    return this.http.post(AppConfig.BASE_URL + AppConfig.GET_LOGGED_USER_DETAILS, req, {})
  }

  setLoggedUserData(data){
    this.subject.next(data)
  }

  setAppMenuItems(data){
    this.subject.next(data);
  }
  getAppMenuItems(): Observable<any> {
    return this.menuSubject;
  }


  getLoggedUserData():Observable<any>{
    return this.subject;
  }

  getAccessToken(data): Observable<any> {
    return this.http.post(AppConfig.BASE_URL+ AppConfig.ACCESS_TOKEN_PATH, data, {})
  }


  getLoggedUserDataByAcademy(data): Observable<any>{
    return this.http.post(AppConfig.BASE_URL+AppConfig.GET_LOGGED_USER_DETAILS_BY_ACADEMY, data, {})
  }


  forgotPassword(data): Observable<any>{
    return this.http.post(AppConfig.BASE_URL + AppConfig.FORGOT_PASSWORD, data, {})
  }

  changePasswordByName(data): Observable<any>{
    return this.http.post(AppConfig.BASE_URL + AppConfig.CHANGE_PASSWORD_BY_USERNAME, data, {})
  }

 checkRestTokenPassword(data): Observable<any>{
    return this.http.post(AppConfig.BASE_URL + AppConfig.CHECK_RESET_TOKEN, data, {})
  }

  updatePasswordByToken(data): Observable<any>{
    return this.http.post(AppConfig.BASE_URL + AppConfig.UPDATE_PASSWORD_BY_TOKEN, data, {})
  }
}
