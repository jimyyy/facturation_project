import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css']
})
export class AddemployeComponent implements OnInit {
  addemployeform: FormGroup;
  user: any = {};
  id:any;
  title:any;
  alert:boolean=false;
  

  constructor(private formBuilder: FormBuilder, private userService:UserService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.activatedroute.snapshot.paramMap.get("id");

    if(this.id){
      //edit
      this.title="Edit";
      this.userService.getuser(this.id).subscribe(
        (data)=>{
          console.log(data);
          this.user=data.user;
        })
      }
      else{
        //add

      this.title="Add"
      }
    this.addemployeform = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      tel:[''],
      email: [''],
      Department: [''],
      password:['']


    })
  }
  addemploye(){
    this.alert=true;
    this.addemployeform.reset({})
    console.log("user",this.user);

    if(this.id){

      this.userService.updateuser(this.user).subscribe(
        (data)=>{
        console.log(data.message);
     });

    }
    else{

      this.user.role="employe";

      this.userService.createuser(this.user).subscribe(
        (data)=>{
        console.log(data.message );
      });

    }





   

  }

  closealert(){
    this.alert=false;
  }

}
