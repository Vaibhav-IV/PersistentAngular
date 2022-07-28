import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

//for autocomplte or searching
export interface User {
  name: string;
}

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

  //for autocomplte or searching
  myControl = new FormControl('');
  options: User[] = [{ name: 'ABC' }, { name: 'XYZ' }, { name: 'BLAH' }];
  filteredOptions!: Observable<User[]>;

  addUserForm!: FormGroup;

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
  }

  get name(){
    return this.addUserForm.controls['name']
  }

  addUser() {
    // console.log(this.addUserForm.value)
    if (this.addUserForm.valid) {
      this.api.postUser(this.addUserForm.value).subscribe({
        next: (res) => {
          alert("User is added succesfully");

          this.addUserForm.reset();
          this.addUserForm.markAsPristine();
          this.addUserForm.markAsUntouched();
        },
        error: (err) => {
          console.log(err);
          alert("Error while adding the user")
        }
      })
    }
  }

}

