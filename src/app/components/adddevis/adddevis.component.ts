import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-adddevis',
  templateUrl: './adddevis.component.html',
  styleUrls: ['./adddevis.component.css']
})
export class AdddevisComponent implements OnInit {
  adddevisform: FormGroup;
  devis: any = {};
  title:any;
  id:any;


  constructor(private formBuilder: FormBuilder,private addService:AddService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.activatedroute.snapshot.paramMap.get("id");

    if(this.id){
      //edit
      this.title="Edit";
      this.addService.getadd(this.id).subscribe(
        (data)=>{
          console.log(data);
          this.devis=data.add;
        })
      }
      else{
        //add

      this.title="Add"
      }










    this.adddevisform = this.formBuilder.group({
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
      total:['']
     
      

    })
  }


  adddevis(){
    console.log("devis",this.devis);

    if(this.id){

      this.addService.updateadd(this.devis).subscribe(
        (data)=>{
        console.log(data.message);
     });

    }
    else{
      this.devis.type="devis";

      this.addService.createadd(this.devis).subscribe(
        (data)=>{
        console.log(data.message );
      });

    }







   
  }

}
