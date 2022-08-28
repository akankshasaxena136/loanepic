import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm, FormGroupDirective} from '@angular/forms';
// import { ErrorStateMatcher } from '@angular/material';
import { ContactService } from '../contactus/contact.service';

@Component({
  selector: 'app-applynow',
  templateUrl: './applynow.component.html',
  styleUrls: ['./applynow.component.css']
})
export class ApplynowComponent implements OnInit {

  formData: FormGroup = new FormGroup({});
  email: any;
  showMsg: boolean = false;
  errorState = false;
  // errorMatcher = new CustomErrorStateMatcher();
  // @ViewChild('form') form;

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

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.formData.controls[controlName].hasError(errorName);
  }

  onSubmit(formData: any, formDirective: FormGroupDirective) {

    this.contact.saveUser(formData.value).subscribe(data => {
    this.formData.reset();
    this.showMsg= true;
    this.formData.markAsPristine();
    this.formData.markAsUntouched();
    formDirective.resetForm();
    });
  }
}
