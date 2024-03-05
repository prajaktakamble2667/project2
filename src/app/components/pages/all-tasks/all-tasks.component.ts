import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss'
})
export class AllTasksComponent {
  newTask="";
  taskList:any[]=[];
  httpService=inject(HttpService);
  dateNow=new Date();
  ngOnInit(){
    this.getAllTasks();
  }

  addTask(){
    console.log("addTask",this.newTask)
    this.httpService.addTask(this.newTask).subscribe(()=>{
      this.newTask="";
      this.getAllTasks();
    })
  }
  getAllTasks(){
    this.httpService.getAllTasks().subscribe((result:any)=>{
      this.taskList=result;
    })
  }

}
