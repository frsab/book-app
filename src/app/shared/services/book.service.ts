import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const headers = new HttpHeaders(environment.headers);

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private resourceHello = '/api/all-world';

  constructor(private http: HttpClient) {}

  public getHello() {
    return this.http.get<any>(this.resourceHello, { headers: headers });
  }
}
