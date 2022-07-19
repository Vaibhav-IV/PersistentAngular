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

const routes: Routes = [
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [IfLoggedInGuard] },
  {path: 'home' , component: HomeComponent, canActivate: [AuthGuard]  },
  {path: 'home/announcements' , component: AnnouncementsComponent},
  {path: 'home/batches' , component: BatchesComponent},
  {path: 'home/sessions' , component: ClassroomSessionsComponent},
  {path: 'home/courses' , component: CoursesComponent,children:[
      {path: 'addCourses' , component: AddCoursesComponent},
      {path: 'showCourses' , component: ShowCoursesComponent},
  ] },
  // {path: 'courses/addCourses' , component: AddCoursesComponent},
  // {path: 'courses/showCourses' , component: ShowCoursesComponent},
  {path: 'dashboard' , component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'home/evaluations' , component: EvaluationsComponent},
  {path: 'home/learnings' , component: LearningObjectsComponent},
  {path: 'home/meetings' , component: MeetingsComponent,}, //jst write home/meetings but in sidenav route link write /home/meetings.. in sidenav use extra '/' this
  {path: 'home/reports' , component: ReportsComponent,},
  {path: 'home/settings' , component: SettingsComponent,},
  {path: 'home/users' , component: UsersComponent, children:[
    {path: 'addUsers' , component: AddUsersComponent},
    {path: 'showUsers' , component: ShowUsersComponent},
  ]},
  // {path: 'users/addUsers' , component: AddUsersComponent},
  // {path: 'users/showUsers' , component: ShowUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
