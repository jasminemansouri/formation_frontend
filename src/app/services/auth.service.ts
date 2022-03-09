import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private endpoint: EndpointService) { }
  register(admin: any) {
    return this.http.post(this.endpoint.baseUrl + 'admin', admin);
  }
  login(admin:any) {
    return this.http.post(this.endpoint.baseUrl + 'admin/login', admin);

  }
  isLoggedIn(){
    let token = localStorage.getItem('appToken');
    if (token) {
      return true
    } else {
      return false
    }
  
  }
}
