import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title ="";
  description ="";
  tasks: any[] = [];
  lastIndex: number = -1;

  adduser(): void{
    if(this.title.trim() != "" && this.description.trim() != ""){
      if(this.lastIndex != -1){
        this.tasks[this.lastIndex].title = this.title.trim();  
        this.tasks[this.lastIndex].description = this.description.trim();  
      }else{
        this.tasks.push({ title: this.title, description: this.description });
      }
      this.title = "";
      this.description = "";
      this.lastIndex = -1;
    }
  }
  onDelete(index: number){
    let box = confirm("Do you really want to delete?");
    if(box){
      this.tasks.splice(index, 1);
    }
  }
  onEdit(index: number){
    this.lastIndex = index;
    this.title = this.tasks[index].title;
    this.description = this.tasks[index].description;
  }
}