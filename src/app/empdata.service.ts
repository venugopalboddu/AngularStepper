import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {

  constructor(private ht: HttpClient) { }

  ge() {
    return this.ht.get('http://localhost:3000/posts');
  }
  po(d) {
    return this.ht.post('http://localhost:3000/posts', d);
  }
}
