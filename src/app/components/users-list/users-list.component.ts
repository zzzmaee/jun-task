import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserCardComponent } from '../user-card/user-card.component';
import { AsyncPipe, NgForOf } from '@angular/common';
import { AppComponent } from '../../app.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, NgForOf, AppComponent, RouterLink, AsyncPipe],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  private readonly usersService = inject(UsersService);
  public readonly users$ = this.usersService.users$;

  deleteUser(id: number): void {
    this.usersService.deleteUser(id);
  }

  ngOnInit(): void {
    this.usersService.loadUsers()
  }

}
