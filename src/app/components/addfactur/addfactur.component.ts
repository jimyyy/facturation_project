import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-addfactur',
  templateUrl: './addfactur.component.html',
  styleUrls: ['./addfactur.component.css']
})
export class AddfacturComponent implements OnInit {
  addfacturform: FormGroup;
  factur: any = {};
  id:any;
  title:any;
  add:any;
  alert:boolean=false;

  constructor(private formBuilder: FormBuilder,private addService:AddService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.paramMap.get("id");

    if(this.id){
      //edit
      this.title="Edit";
      this.addService.getadd(this.id).subscribe(
        (data)=>{
          console.log(data);
          this.factur=data.add;
        })
      }
      else{
        //add

      this.title="Add"
      }








    this.addfacturform = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      tel: [''],
      Num:[''],
      Date:[''],
      code:[''],
      Product: [''],
      Price: [''],
      TVA: [''],
      amount:[''],
      total:[''],
      Advance: [''],
      Rest: ['']
      

    })
  }


  addfactur(){
    this.alert=true;
    this.addfacturform.reset({})
    console.log("factur",this.factur);


    if(this.id){

      this.addService.updateadd(this.factur).subscribe(
        (data)=>{
        console.log(data.message);
     });

    }
    else{
      this.factur.type="factur";

      this.addService.createadd(this.factur).subscribe(
        (data)=>{
        console.log(data.message );
      });
    }


    
  }

  closealert(){
    this.alert=false;
  }

}
