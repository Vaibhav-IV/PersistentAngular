import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomSessionsComponent } from './classroom-sessions.component';

describe('ClassroomSessionsComponent', () => {
  let component: ClassroomSessionsComponent;
  let fixture: ComponentFixture<ClassroomSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
