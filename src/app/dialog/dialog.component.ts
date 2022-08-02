import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private api: ApiService) {}

  addCourseForm!: FormGroup


  ngOnInit(): void {
    this.addCourseForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  addCourseDetails(){
    if(this.addCourseForm.valid){
      console.log(this.addCourseForm.value);
      this.api.postCourseDetails(this.addCourseForm.value).subscribe({
        next: (data) => {
          console.log(data);
          alert("Course Details Added Succesfully");
          this.addCourseForm.reset();
        },
        error: () => {
          alert("Adding Course details Incomplete")
        },
        complete: () => {
        }
      })
      
    }
  }
}
