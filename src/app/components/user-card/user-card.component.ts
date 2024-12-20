import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input({ required: true }) user!: User;
  @Output() deleteUserEvent = new EventEmitter<number>()

  deleteUser(id: number) {
    this.deleteUserEvent.emit(id)
  }
}
