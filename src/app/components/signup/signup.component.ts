import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from '../confirmPassword';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform:FormGroup;
  alert:boolean=false;

  constructor(private formBuilder:FormBuilder,private userService:UserService) { }

  ngOnInit(): void {

    
    this.signupform=this.formBuilder.group({
      firstName :['',[Validators.required,Validators.minLength(3)]],
      lastName :['',[Validators.required,Validators.minLength(5)]],
      email :['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword : ['',[Validators.required]],
      tel : ['',[Validators.required,Validators.minLength(8)]]

    },
    {
      validator :MustMatch('password','confirmPassword')
    });
  }
  signup(c:any){
    this.alert=true;
    this.signupform.reset({})

    
    console.log("admin",c)

    c.role="employe";

    this.userService.createuser(c).subscribe(
      (data)=>{
      console.log(data.message );
    });
    

  }
  closealert(){
    this.alert=false;
  }

 

}
