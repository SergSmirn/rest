import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class CoreService {
  private Url = 'http://127.0.0.1:8002/cats/';
  constructor(private http: HttpClient, private authService: AuthService) { }

  createItem(data) {
    const options = this.generateHeaders();
    return this.http.post(this.Url, data, options);
  }

  listItems() {
    const options = this.generateHeaders();
    return this.http.get(this.Url, options);
  }

  updateItem(itemID, updateData) {
    const options = this.generateHeaders();
    return this.http.put(`${ this.Url }${ itemID }/`, updateData, options);
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
