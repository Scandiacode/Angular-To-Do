import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  Tasks:ToDo[] = [
    {
      task:"Wake up",
      completed:true
    },
    {
      task:"Brush Teeth",
      completed:false
    },
    {
      task:"Eat Breakfast",
      completed:true
    },
    {
      task:"Join Class",
      completed:true
    },
    {
      task:"Lunch",
      completed:false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setComplete(Index:number):void{
    this.Tasks[Index].completed = true;
  }

  AddTodo(form:NgForm){
    let newTodo:ToDo = {
      task: form.form.value.task,
      completed: false
    };

    this.Tasks.push(newTodo);
  }

}
