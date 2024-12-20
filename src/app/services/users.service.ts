import { inject, Injectable } from '@angular/core';
import { UsersApiService } from './users-api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly usersApiService = inject(UsersApiService);
  private readonly usersSubject$ = new BehaviorSubject<User[]>([]);
  public users$: Observable<User[]> = this.usersSubject$.asObservable();

  constructor() {
    this.loadUsers();
  }

  public deleteUser(id: number): void {
    this.usersSubject$.next(this.usersSubject$.value.filter(user => user.id !== id));
  }

  public loadUsers(): void {
    this.usersApiService.getUsers().subscribe((users) => {
      this.usersSubject$.next(users);
    });
  }
}
