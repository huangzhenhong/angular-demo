import { Component, EventEmitter, Output } from '@angular/core';
import { User } from "./user/user";
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-users',
  imports: [User],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  users = DUMMY_USERS;
  @Output() selectedUserId = new EventEmitter<string>();

  onSelectUser (id: string) {
    this.selectedUserId.emit(id);
  }
}
