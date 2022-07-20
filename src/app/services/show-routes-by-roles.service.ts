import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ShowRoutesByRolesService {
  adminRoutes = [
    '/home',
    '/dashboard',
    '/home/announcements',
    '/home/batches',
    '/home/sessions',
    '/home/courses/addCourses',
    '/home/courses/showCourses',
    '/home/evaluations',
    '/home/learnings',
    '/home/meetings',
    '/home/reports',
    '/home/users/addUsers',
    '/home/users/showUsers',
  ];

  teacherRoutes = [
    '/dashboard',
    '/home/Courses/showcourses',
    '/home/evaluations',
    '/home/sessions',
    '/home/announcements',
    '/home/course-reports'
  ];

  studentRoutes = [
    '/dashboard',
    '/home/Courses/showcourses',
    '/home/learnings',
    '/home/sessions',
    '/home/meetings',
    '/home/queries',
    '/home/announcements',
    '/home/notifications'
  ]

  constructor(private loginAuth: AuthService) { }

  showRoutes(state: any) {
    const role = this.loginAuth.getRole();
    if (role == 1) {
      console.log(state.url.toLowerCase());
      let isExists = this.adminRoutes.find((item) => {
        return state.url.toLowerCase() == item.toLowerCase()
      })
      if (isExists)
        return true;
    } else if (role == 2) {
      let isExists = this.teacherRoutes.find((item) => {
        return state.url.toLowerCase() == item.toLowerCase()
      })
      if (isExists)
        return true;
    }
    else if (role == 3) {
      let isExists = this.studentRoutes.find((item) => {
        return state.url.toLowerCase() == item.toLowerCase()
      })
      if (isExists)
        return true;
    }
    return false;
  }

}
