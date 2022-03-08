import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root',
})
export class MenudataService {
  constructor(private http: HttpClient, private endpoint: EndpointService) {}

  create(menu: any) {
    return this.http.post(this.endpoint.baseUrl + 'menu/', menu);
  }
  getall() {
    return this.http.get(this.endpoint.baseUrl + 'menu/');
  }
  getbyid(id: any) {
    return this.http.get(this.endpoint.baseUrl + 'menu/' + id);
  }
  update(id: any, menu: any) {
    return this.http.put(this.endpoint.baseUrl + 'menu/' + id, menu);
  }
  delete(id: any) {
    return this.http.delete(this.endpoint.baseUrl + 'menu/' + id);
  }
}
