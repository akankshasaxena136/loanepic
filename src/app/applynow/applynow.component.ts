import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective} from '@angular/forms';
import { ContactService } from '../contactus/contact.service';
import { Router } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgIf } from '@angular/common';

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
  description: any;
  name: any;


  constructor(private builder: FormBuilder,
    private contact: ContactService,
    private router: Router)
    {
      
     }

  onCancel() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.formData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      contactno: new FormControl('', [Validators.required , Validators.pattern(/^[0-9]{10,10}$/)]),
      city: new FormControl(''),
      query: new FormControl('')
      })
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
