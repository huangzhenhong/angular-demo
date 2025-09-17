import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task";
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({ required: true}) userId!: string;
  @Input() completedTaskId: string = "";
  isAddingTask: boolean = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get SelectedUserTasks() {
    return this.tasks.filter(t => t.userId === this.userId);
  }

  onTaskCompleted (taskId: string) {
    this.completedTaskId = taskId;
    console.log('Completed Task ID:', taskId);
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }

  onStartAddTask () {
    this.isAddingTask = true;
  }

  onCancelAddTask () {
    this.isAddingTask = false;
  }

  onConfirmAddTask (title: string, summary: string, dueDate: string) {
    const newTask = {
      id: 't' + (this.tasks.length + 1),
      userId: this.userId,
      title: title,
      summary: summary,
      dueDate: dueDate,
    };
    this.tasks.push(newTask);
    console.log('Added Task:', newTask);
  }
}
