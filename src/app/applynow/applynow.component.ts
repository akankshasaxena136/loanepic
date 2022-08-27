import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { ContactService } from '../contactus/contact.service';

@Component({
  selector: 'app-applynow',
  templateUrl: './applynow.component.html',
  styleUrls: ['./applynow.component.css']
})
export class ApplynowComponent implements OnInit {

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

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.formData.controls[controlName].hasError(errorName);
  }

  onSubmit(formData: any) {
    this.contact.saveUser(this.formData.value).subscribe(data => {
      console.log('message::::', data);
      this.formData.reset();
    });
  }
}
