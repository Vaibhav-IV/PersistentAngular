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
 // errors = errorMessages;

  constructor(private formBuilder: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.addCourseForm = this.formBuilder.group({
      name: ['', Validators.required ],
      category_id: ['', Validators.required],
      code: ['', Validators.required],
      description: ['', Validators.required],
      'start-date': ['', Validators.required],
      'end-date': ['', Validators.required],
      extension: ['', Validators.required],
      teacher_id: ['', Validators.required],
      status: ['', Validators.required],
    })
  }

  addCourse() {
    if (this.addCourseForm.valid) {
      this.api.postCourse(this.addCourseForm.value).subscribe({
        next: (data) => {
          console.log(data);
          alert("Course Added Succesfully");
          this.addCourseForm.reset();
        },
        error: () => {
          alert("Adding Course Incomplete")
        },
        complete: () => {
        }
      })
    } else {
      alert('form fields not valid');
    }
  }

}
