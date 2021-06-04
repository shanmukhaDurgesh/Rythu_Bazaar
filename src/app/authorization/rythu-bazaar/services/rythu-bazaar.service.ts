import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/common-shared/constants/app.config';

@Injectable({
  providedIn: 'root'
})
export class RythuBazaarService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(AppConfig.BASE_URL + AppConfig.GET_ALL_EMPLOYEES, AppConfig.httpOptions);
  }
  createEmployee(user): Observable<any>{
   return this.http.post<any>(AppConfig.BASE_URL + AppConfig.CREATE_EMPLOYEE, user, AppConfig.httpOptions);
  }
  getAllDistrits(user): Observable<any>{
    return this.http.post<any>(AppConfig.BASE_URL + AppConfig.GET_ALL_DISTRICTS, user, AppConfig.httpOptions);
  }
  getAllRbz(user): Observable<any>{
    return this.http.post<any>(AppConfig.BASE_URL + AppConfig.GET_ALL_RBG, user, AppConfig.httpOptions);
  }
  updateEmp(user): Observable<any>{
    return this.http.post<any>(AppConfig.BASE_URL + AppConfig.UPDATE_EMPLOYEE, user, AppConfig.httpOptions);
  }
  getEmpById(user): Observable<any>{
    return this.http.post<any>(AppConfig.BASE_URL + AppConfig.GET_EMPLOYEE_BY_ID, user, AppConfig.httpOptions);
  }
  deleteEmpById(user): Observable<any>{
    return this.http.post<any>(AppConfig.BASE_URL + AppConfig.DELETE_EMPLOYEE, user, AppConfig.httpOptions);
  }
  getAllLeaves(user): Observable<any>{
    return this.http.post<any>(AppConfig.BASE_URL + AppConfig.GET_ALL_LEAVE_DETAILS, user, AppConfig.httpOptions);
  }
  CreateLeaves(user): Observable<any>{
    return this.http.post<any>(AppConfig.BASE_URL + AppConfig.CREATE_NEW_LEAVE, user, AppConfig.httpOptions);
  }
  updateLeave(user): Observable<any>{
    return this.http.post<any>(AppConfig.BASE_URL + AppConfig.UPDATE_LEAVE_STATUS, user, AppConfig.httpOptions);
  }
}
