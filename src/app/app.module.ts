import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Mat Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


//All Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { PlotComponent } from './home/plot/plot.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './home/cards/cards.component';
import { ShowUsersComponent } from './users/show-users/show-users.component';
import { AddCoursesComponent } from './courses/add-courses/add-courses.component';
import { ShowCoursesComponent } from './courses/show-courses/show-courses.component';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { QueriesComponent } from './queries/queries.component';
import { CourseReportsComponent } from './course-reports/course-reports.component';

@NgModule({
  declarations: [
    AppComponent,
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
    FooterComponent,
    CardsComponent,
    ShowUsersComponent,
    AddCoursesComponent,
    ShowCoursesComponent,
    AddUsersComponent,
    LoginComponent,
    NotificationsComponent,
    QueriesComponent,
    CourseReportsComponent

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
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatProgressBarModule,
    NgxMatSelectSearchModule,
    LayoutModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
