import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  updateUserFundsById(userRef: any): any {
    return this.http.put("http://localhost:9090/user/updateUserFundsById", userRef, { responseType: 'text' })
  }
}
