import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddService } from 'src/app/services/add.service';
import { dateLessThan } from '../date';

@Component({
  selector: 'app-addconges',
  templateUrl: './addconges.component.html',
  styleUrls: ['./addconges.component.css']
})
export class AddcongesComponent implements OnInit {
  addcongesform: FormGroup;
  
  title:any;
  id:any;
  conges:any={};
  alert:boolean=false;
  
  



  constructor(private formBuilder: FormBuilder,private addService:AddService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.activatedroute.snapshot.paramMap.get("id");

    if(this.id){
      //edit
      this.title="Edit";
      this.addService.getconge(this.id).subscribe(
        (data)=>{
          console.log(data);
          this.conges=data.add;
          
        })
      }
      else{
        //add

      this.title="Add"
      }






    this.addcongesform = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      message: [''],
      datefrom: [''],
      dateto: ['']
    },
    {
      validator : dateLessThan('datefrom','dateto')
    });
    
  }

  addconges(){
    this.alert=true;
    this.addcongesform.reset({})
   


    if(this.id){

      this.addService.updateconges(this.conges).subscribe(
        (data)=>{
        console.log(data.message);
     });

    }
    else{
      this.conges.type="conges";

      this.addService.createconges(this.conges).subscribe(
        (data)=>{
        console.log(data.message );
      });

    }


   
  }
  closealert(){
    this.alert=false;
  }

}
