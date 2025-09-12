import { Component, EventEmitter, Output } from '@angular/core';
import { UserComponent } from "./user/user";
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-users',
  imports: [UserComponent],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  users = DUMMY_USERS;
  userId: string = "";
  @Output() selectedUserId = new EventEmitter<string>();

  onSelectUser (userId: string) {
    this.selectedUserId.emit(userId);
    this.userId = userId;
  }
}
