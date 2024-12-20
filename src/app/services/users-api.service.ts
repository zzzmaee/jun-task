import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  private readonly _http = inject(HttpClient);
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
  constructor() {
  }

  public getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.apiUrl);
  }
}
