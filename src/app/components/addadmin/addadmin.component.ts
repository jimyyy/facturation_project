import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  addadminform: FormGroup;
  user:any={};
  alert:boolean=false;

  constructor( private userService:UserService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.addadminform = this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.minLength(5)]],
      tel:['',[Validators.required,Validators.minLength(8)]],
      email: ['',[Validators.required,Validators.email]],
      
      password:['',[Validators.required,Validators.minLength(8)]]


    })



  }



  addadmin(c:any){

    this.alert=true;
    this.addadminform.reset({})
    console.log("admin",c)

    c.role="admin";

    this.userService.createuser(c).subscribe(
      (data)=>{
      console.log(data.message );
    });
  }


  closealert(){
    this.alert=false;
  }

}
