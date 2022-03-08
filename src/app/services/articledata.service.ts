import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root',
})
export class ArticledataService {
  constructor(private http: HttpClient, private endpoint: EndpointService) {}

  create(blog: any) {
    return this.http.post(this.endpoint.baseUrl + 'blog/', blog);
  }
  getall() {
    return this.http.get(this.endpoint.baseUrl + 'blog/');
  }
  getbyid(id: any) {
    return this.http.get(this.endpoint.baseUrl + 'blog/' + id);
  }
  update(id: any, blog: any) {
    return this.http.put(this.endpoint.baseUrl + 'blog/' + id, blog);
  }

  delete(id: any) {
    return this.http.delete(this.endpoint.baseUrl + 'blog/' + id);
  }
}
