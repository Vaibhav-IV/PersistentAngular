import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { BatchesComponent } from './batches/batches.component';
import { ClassroomSessionsComponent } from './classroom-sessions/classroom-sessions.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { HomeComponent } from './home/home.component';
import { LearningObjectsComponent } from './learning-objects/learning-objects.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home' , component: HomeComponent },
  {path: 'announcements' , component: AnnouncementsComponent},
  {path: 'batches' , component: BatchesComponent},
  {path: 'sessions' , component: ClassroomSessionsComponent},
  {path: 'courses' , component: CoursesComponent},
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'evaluations' , component: EvaluationsComponent},
  {path: 'learnings' , component: LearningObjectsComponent},
  {path: 'home/meetings' , component: MeetingsComponent}, //jst write home/meetings but in sidenav route link write /home/meetings.. in sidenav use extra '/' this
  {path: 'reports' , component: ReportsComponent},
  {path: 'settings' , component: SettingsComponent},
  {path: 'users' , component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
