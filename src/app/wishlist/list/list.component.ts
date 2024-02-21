import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.readLocal();
  }
  tasks?: any[];

  addwhistlist(input: HTMLInputElement) {
    if (this.tasks) {
      this.tasks?.push({
        name: input.value,
        completed: false,
        created_at: new Date(),
        updated_at: new Date(),
      });
    } else {
      this.tasks = [
        {
          name: input.value,
          completed: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ];
    }
    this.saveLocal();
    input.value = '';
  }
  changeWhistlist(id: number) {
    if (this.tasks) {
      this.tasks[id].completed = !this.tasks[id].completed;
    }
    this.saveLocal();
  }
  deleteWish(id: number) {
    if (this.tasks) {
      this.tasks.splice(id, 1);
    }
    this.saveLocal();
  }
  saveLocal() {
    if (this.tasks) {
      let json_data = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', json_data);
    }
  }
  readLocal() {
    let json_data = localStorage.getItem('tasks');
    if (json_data) {
      this.tasks = JSON.parse(json_data);
    }
  }
}
