import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import {Observable, BehaviorSubject} from "rxjs/index";
import {ICore} from "./icore";

@Injectable()
export class CoreService {
  private Url = 'http://127.0.0.1:8002/cats/';
  private inited: Boolean = false;
  constructor(private http: HttpClient, private authService: AuthService) { }

  getInited() {
    return this.inited;
  }

  setInited(val) {
    this.inited = val;
  }

  createItem(data) {
    const options = this.generateHeaders();
    return this.http.post(this.Url, data, options);
  }

  listItems(): Observable<ICore[]> {
    const options = this.generateHeaders();
    return this.http.get<ICore[]>(this.Url, options);
  }

  updateItem(item) {
    const options = this.generateHeaders();
    return this.http.put(`${ this.Url }${ item.id }/`, item, options);
  }

  deleteItem(itemID) {
    const options = this.generateHeaders();
    return this.http.delete(`${ this.Url }${ itemID }/`, options);
  }

  getItem(itemID) {
    const options = this.generateHeaders();
    return this.http.get(`${ this.Url }${ itemID }/`, options);
  }

  generateHeaders() {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.authService.getToken()}` });
    return { 'headers': headers };
  }
}
