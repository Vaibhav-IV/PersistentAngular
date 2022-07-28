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
          { name: 'Announcements', path: './announcements' },
          { name: 'Batches', path: './batches' },
          { name: 'Sessions', path: './sessions' },
          { name: 'Evaluations', path: './evaluations' },
          { name: 'Learnings', path: './learnings' },
          { name: 'Reports', path: './reports' },
          { name: 'Settings', path: './settings' },
          { name: 'Meetings', path: './meetings' },
          {
            name: 'users', path: './users', children: [
              { name: 'Add Users', path: './addUsers' },
              { name: 'Show Users', path: './showUsers' }
            ]
          },
          {
            name: 'courses', path: './courses', children: [
              { name: 'Add Courses', path: './addCourses' },
              { name: 'Show Courses', path: './showCourses' }
            ]
          },
          { name: 'Queries', path: './queries' },
          { name: 'Notifications', path: './notifications' },
          { name: 'Course Reports', path: './course-reports' },
          { name: 'View Course', path: './viewCourse' }

        ]
      }
    ];
    return menu;
  }

}

