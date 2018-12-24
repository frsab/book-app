import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private resourceHello = 'http://localhost:8080/api/hello-world';

  constructor(private http: HttpClient) {}

  public getHello() {
    return this.http.get<String>(this.resourceHello);
  }
}
