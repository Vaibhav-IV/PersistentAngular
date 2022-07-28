import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

export interface Teachers {
  name: string;
  email: string
}

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {


  addUserForm!: FormGroup;
  seniors!: any[];
  constructor(private formBuilder: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobileNo: ['', Validators.required],
      passWord: ['', Validators.required],
      role: ['', Validators.required],
      dept_name: ['', Validators.required],
      reports_to: ['', Validators.required],
      status: ['', Validators.required],
    });

    const sub = this.api.getUsers().subscribe({
      next: (res) => {
        this.seniors = res.content;
      },
      complete: () => {
        sub.unsubscribe();
      },
      error: (err) => {
        alert("something went wrong");
      }
    });


  }

  addUser() {
    if (this.addUserForm.valid) {
      const getRoleOfReportingToObj = this.seniors.find((item) => {
        return item.email == this.addUserForm.value.reports_to;
      })
      const getRoleOfReportingTo = getRoleOfReportingToObj.role_name;

      const formValues = this.addUserForm.value;
      if ((formValues.role == "Student" && getRoleOfReportingTo == "Student") ||
        (formValues.role == "Teacher" && getRoleOfReportingTo == "Student") ||
        (formValues.role == "Admin" && getRoleOfReportingTo == "Student")) {
        alert("You can not report to student");
        return 0;
      }
      if ((formValues.role == "Admin" && getRoleOfReportingTo == "Teacher")) {
        alert("Role Admin can not report to Teacher")
        return 0;
      }
      this.api.postUser(this.addUserForm.value).subscribe({
        next: (res) => {
          alert("User is added succesfully");
          this.addUserForm.reset();
        },
        error: (err) => {
          console.log(err);
          alert("Error while adding the user")
        }
      });
    }
    return;
  }

}
