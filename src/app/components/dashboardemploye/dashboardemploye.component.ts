
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-dashboardemploye',
  templateUrl: './dashboardemploye.component.html',
  styleUrls: ['./dashboardemploye.component.css']
})
export class DashboardemployeComponent implements OnInit {
  adds: any;
  alert:boolean=false;
  connecterUser:any;
  connecter:any=false;

  constructor(private router: Router, private addService: AddService) { }

  ngOnInit(): void {
    this.connecterUser=JSON.parse(localStorage.getItem("connecterUser"));
    if(this.connecterUser.role=="admin"){
      this.connecter=true;
    }

    this.addService.getconges().subscribe(
      (data) => {
        console.log(data.adds);
        this.adds = data.adds;
      })

    

  }


  addconges(){
    this.router.navigate(["addconges"]);

  }

  deleteconges(id:any){
    this.alert=true;

    this.addService.deleteconges(id).subscribe(
      (data) => {
        console.log(data.message);
        this.addService.getadds().subscribe(
          (data) => {
            console.log(data.adds);
            this.adds = data.adds;
          })
      })



  }


  editconges(id:any){

    this.router.navigate([`editconges/${id}`]);

  }

  closealert(){
    this.alert=false;
  }

}
