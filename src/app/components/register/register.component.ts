import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators , FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createregisterForm();
  }

  createregisterForm(){
    this.registerForm = this.formBuilder.group({
      Name:["",Validators.required],
      Surname:[""],
      PhoneNumber:[""],
      Email:["",Validators.required],
      Password:["",Validators.required]
    })
  }

  register() {
    console.log(this.registerForm.value)
   if (this.registerForm.valid) {
      let registerModel = Object.assign({}, this.registerForm.value);
      this.authService.register(registerModel).subscribe((response) => {
        console.log(this.registerForm.value)
        this.toastrService.success('Formunuz Eklenmiştir.', 'Dikkat Dikkat');
      });
   } else {
  this.toastrService.error('Formunuz Geçersizdir.', 'Dikkat Dikkat');
 }
    }

}
