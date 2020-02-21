import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmpdataService } from 'src/app/empdata.service';

@Component({
  selector: 'app-registration-step3',
  templateUrl: './registration-step3.component.html',
  styleUrls: ['./registration-step3.component.css']
})
export class RegistrationStep3Component implements OnInit {
  fdata:any;
  constructor(private s: EmpdataService) { }

  @Input() regForm: FormGroup;
  formSubmitted: boolean = false;

  ngOnInit() {
    this.getData();
  }
  getData()  {
    this.s.ge().subscribe(res=>this.fdata=res); 
    
  }
  submit() {
    let postDetails = {
      firstname: this.regForm.get('personalDetails').get('firstname').value,
      lastname: this.regForm.get('personalDetails').get('lastname').value,
      email: this.regForm.get('contactDetails').get('email').value,
      city: this.regForm.get('contactDetails').get('city').value
    }
    console.log('submitted', postDetails);
       this.s.po(postDetails).subscribe((res)=>this.getData());
    this.formSubmitted = true;
  }
}
