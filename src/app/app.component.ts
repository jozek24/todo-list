import { Component } from '@angular/core';
import{Task} from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskName='';
  taskDate='';
  config:{[key: string]: string} = null;
  tasks: Task[]=[
    {
      name: 'Siłownia',
      deadline: '2020-02-20',
      done:false
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-02-21',
      done:false
    },
    {
      name: 'Śpiewanie',
      deadline: '2020-05-10',
      done:false
    }
  ];

constructor() {
  setTimeout(()=>{
    this.config={
      title: 'Lista Zadań',
      footer: '© Lista zadań, All rights reserved.',
      date: new Date().toDateString()
      };
  },500);
  }

  clearTasks(){
    this.tasks=[];
  }

  createTask(){
    const task: Task={
    name:this.taskName,
    deadline:this.taskDate,
    done:false
    };

    this.tasks.push(task);
    this.taskName='';
    this.taskDate='';
  }
}
