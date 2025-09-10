import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  @Input({ required: true}) user!: {
    id: string;
    avatar: string;
    name: string;
  };

  @Output() id = new EventEmitter<string>();

  get imagePath () {
   return 'assets/users/' + this.user.avatar;
  }

  onSelectUser () {
    this.id.emit(this.user.id);
  }
}
