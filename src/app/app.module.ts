import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';

//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BatchesComponent } from './batches/batches.component';
import { ClassroomSessionsComponent } from './classroom-sessions/classroom-sessions.component';
import { CoursesComponent } from './courses/courses.component';
import { LearningObjectsComponent } from './learning-objects/learning-objects.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { UsersComponent } from './users/users.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { PlotComponent } from './plot/plot.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';



@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    BatchesComponent,
    ClassroomSessionsComponent,
    CoursesComponent,
    LearningObjectsComponent,
    MeetingsComponent,
    UsersComponent,
    EvaluationsComponent,
    AnnouncementsComponent,
    ReportsComponent,
    SettingsComponent,
    PlotComponent,
    ProgressbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    LayoutModule,
    CommonModule
   // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
