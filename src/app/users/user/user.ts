import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {

  @Input({ required: true}) user!: User;
  @Input() selected = false;
  @Output() userId = new EventEmitter<string>();

  get imagePath () {
   return 'assets/users/' + this.user.avatar;
  }

  onSelectUser () {
    this.userId.emit(this.user.id);
  }
}
