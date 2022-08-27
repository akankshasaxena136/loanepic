import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  formData: FormGroup = new FormGroup({});
  email: any;

  constructor(private builder: FormBuilder,
    private contact: ContactService) {
      this.formData = this.builder.group({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.email]),
        contactno: new FormControl('', [Validators.required]),
        city: new FormControl(''),
        query: new FormControl('')
        })
     }

  ngOnInit() {

    
  }

  users: any[] = [];
  userCount = 0;

  onSubmit(formData: any) {
    this.contact.saveContact(this.formData.value).subscribe(data => {
      console.log('message::::', data);
      this.userCount = this.userCount + 1;
      console.log(this.userCount);
      this.formData.reset();
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.formData.controls[controlName].hasError(errorName);
  }

  // onSubmit(formData: any) {
  //   console.log(FormData)
  //   this.contact.+PostMessage(FormData)
  //     .subscribe(response => {
  //       location.href = 'https://mailthis.to/confirm'
  //       console.log(response)
  //     }, error => {
  //       console.warn(error.responseText)
  //       console.log({ error })
  //     })
  // }
}
