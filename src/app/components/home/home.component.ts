import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  signupform:FormGroup;

  constructor(private formBuilder:FormBuilder,private userService:UserService) { }

  ngOnInit(): void {

    this.signupform=this.formBuilder.group({
      firstName :['',[Validators.required,Validators.minLength(3)]],
      lastName :['',[Validators.required,Validators.minLength(5)]],
      email :['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword : ['',[Validators.required]],
      tel : ['',[Validators.required,Validators.minLength(8)]]

  });

}


signup(c:any){
  console.log("admin",c)

  c.role="employe";

  this.userService.createuser(c).subscribe(
    (data)=>{
    console.log(data.message );
  });
  

}


  

}
