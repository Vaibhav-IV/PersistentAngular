import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss']
})
export class AddCoursesComponent implements OnInit {

  addCourseForm!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.addCourseForm = this.formBuilder.group({
      courseType: ['', Validators.required],
      courseTitle: ['', Validators.required],
      courseCode: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      duration: ['', Validators.required],
      courseCriteria: ['', Validators.required],
      courseExtension: ['', Validators.required],
      trainer: ['', Validators.required],
      trainerName: ['', Validators.required],
      courseStatus: ['', Validators.required],
    })
  }

  addCourse() {
    console.log(this.addCourseForm.value)
    if(this.addCourseForm.valid){
      this.api.postCourse(this.addCourseForm.value).subscribe({
        next:(res) =>{
          alert("Course Added Succesfully");
          this.addCourseForm.reset();
        },
        error:() => {
          alert("Adding Course Incomplete: Error 404")
        }
      })
    }
  }

}
