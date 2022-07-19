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
  options: User[] = [{name: 'ABC'}, {name: 'XYZ'}, {name: 'BLAH'}];
  filteredOptions!: Observable<User[]>;

  addUserForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      userName: ['', Validators.required],
      userEmail: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required],
      reportingTo: ['', Validators.required],
    }
      //CustomValidatorsService.mustMatch('password', 'confirmPassword') // insert here
    )

    //for autocomplte or searching
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );

  }
  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }


  addUser() {
    console.log(this.addUserForm.value)
    if (this.addUserForm.valid) {
      this.api.postUser(this.addUserForm.value).subscribe({
        next: (res) => {
          alert("User is added succesfully");
          this.addUserForm.reset();
        },
        error: () => {
          alert("Error while adding the user")
        }
      })
    }
  }

}

