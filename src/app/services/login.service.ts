import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //Token
  public generateToken(loginData:any){
    return this.http.post(`${baserUrl}api/v1/auth/login`, loginData);
  }
}
