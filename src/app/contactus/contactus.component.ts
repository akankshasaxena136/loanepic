import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm, FormGroupDirective} from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  formData: FormGroup = new FormGroup({});
  email: any;
  showMsg: boolean = false;

  constructor(private builder: FormBuilder,
    private contact: ContactService) {
      this.formData = this.builder.group({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.email]),
        contactno: new FormControl('', [Validators.required , Validators.pattern(/^[0-9]{10,10}$/)]),
        city: new FormControl(''),
        query: new FormControl('')
        })
     }

  ngOnInit() {

    
  }


  onSubmit(formData: any, formDirective: FormGroupDirective) {

    this.contact.saveContact(formData.value).subscribe(data => {
    this.formData.reset();
    this.showMsg= true;
    this.formData.markAsPristine();
    this.formData.markAsUntouched();
    formDirective.resetForm();
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
