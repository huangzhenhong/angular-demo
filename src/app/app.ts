import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Users } from "./users/users";
import { CommonModule } from '@angular/common';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Header, Users, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo01');

  selectedUserId: string = "";

  onSelectUser (id: string) {
    this.selectedUserId = id;
    console.log('Selected User ID:', id);
  }
}
