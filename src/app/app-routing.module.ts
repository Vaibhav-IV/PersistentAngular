import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//All Component List
import { AnnouncementsComponent } from './announcements/announcements.component';
import { BatchesComponent } from './batches/batches.component';
import { ClassroomSessionsComponent } from './classroom-sessions/classroom-sessions.component';
import { AddCoursesComponent } from './courses/add-courses/add-courses.component';
import { CoursesComponent } from './courses/courses.component';
import { ShowCoursesComponent } from './courses/show-courses/show-courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { HomeComponent } from './home/home.component';
import { LearningObjectsComponent } from './learning-objects/learning-objects.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { ShowUsersComponent } from './users/show-users/show-users.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { IfLoggedInGuard } from './guards/if-logged-in.guard';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { QueriesComponent } from './queries/queries.component';
import { CourseReportsComponent } from './course-reports/course-reports.component';
import { ViewCourseComponent } from './courses/view-course/view-course.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', redirectTo: 'dashboard' },
  { path: 'login', component: LoginComponent, canActivate: [IfLoggedInGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home/announcements', component: AnnouncementsComponent, canActivate: [AuthGuard] },
  { path: 'home/batches', component: BatchesComponent, canActivate: [AuthGuard] },
  { path: 'home/sessions', component: ClassroomSessionsComponent, canActivate: [AuthGuard] },
  {
    path: 'home/courses', component: CoursesComponent, children: [
      { path: 'addCourses', component: AddCoursesComponent, canActivate: [AuthGuard] },
      { path: 'showCourses', component: ShowCoursesComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: 'home/evaluations', component: EvaluationsComponent, canActivate: [AuthGuard] },
  { path: 'home/learnings', component: LearningObjectsComponent, canActivate: [AuthGuard] },
  { path: 'home/meetings', component: MeetingsComponent, canActivate: [AuthGuard] },
  { path: 'home/reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'home/settings', component: SettingsComponent, canActivate: [AuthGuard] },
  {
    path: 'home/users', component: UsersComponent, children: [
      { path: 'addUsers', component: AddUsersComponent, canActivate: [AuthGuard] },
      { path: 'showUsers', component: ShowUsersComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: 'home/notifications', component: NotificationsComponent, canActivate: [AuthGuard] },
  { path: 'home/queries', component: QueriesComponent, canActivate: [AuthGuard] },
  { path: 'home/course-reports', component: CourseReportsComponent, canActivate: [AuthGuard] },
  {path: 'home/viewCourse' , component: ViewCourseComponent,canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
