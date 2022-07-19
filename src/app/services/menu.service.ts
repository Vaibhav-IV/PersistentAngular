import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      {
        name: 'home', path: './home', children: [
          { name: 'announcements', path: './announcements' },
          { name: 'batches', path: './batches' },
          { name: 'sessions', path: './sessions' },
          { name: 'evaluations', path: './evaluations' },
          { name: 'learnings', path: './learnings' },
          { name: 'reports', path: './reports' },
          { name: 'settings', path: './settings' },
          { name: 'meetings', path: './meetings' },
          { name: 'users', path: './users',children:[
            { name: 'addUsers', path: './addUsers' },
            { name: 'showUsers', path: './showUsers' }
          ] },
          { name: 'courses', path: './courses',children:[
            { name: 'addCourses', path: './addCourses' },
            { name: 'showCourses', path: './showCourses' }
          ] }
        ]
      }
    ];
    return menu;
  }

}

