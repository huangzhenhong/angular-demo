import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {

  @Output() cancel = new EventEmitter<boolean>();

  onCancel () {
    console.log('Cancel adding new task');
    this.cancel.emit(true);
  }

  onConfirm (title: string, summary: string, dueDate: string) {
    console.log('Confirm adding new task', { title, summary, dueDate });
  }
}
