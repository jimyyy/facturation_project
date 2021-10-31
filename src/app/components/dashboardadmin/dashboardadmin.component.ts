import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddService } from 'src/app/services/add.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent implements OnInit {
  users: any;
  adds: any;
  alert:boolean=false;


  constructor(private userService: UserService, private addService: AddService, private router: Router) { }

  ngOnInit(): void {

    this.userService.getusers().subscribe(
      (data) => {
        console.log(data.users);
        this.users = data.users;



      })

    this.addService.getadds().subscribe(
      (data) => {
        console.log(data.adds);
        this.adds = data.adds;



      })
  }


  Delete(id: any) {
    this.alert=true;

    this.userService.deleteuser(id).subscribe(
      (data) => {
        console.log(data.message);
        this.userService.getusers().subscribe(
          (data) => {
            console.log(data.users);
            this.users = data.users;
          })
      })
  }
  edit(id: any) {
    this.router.navigate([`editemploye/${id}`]);

  }
  deleteadd(id: any) {
    this.alert=true;
    this.addService.deleteadd(id).subscribe(
      (data) => {
        console.log(data.message);
        this.addService.getadds().subscribe(
          (data) => {
            console.log(data.adds);
            this.adds = data.adds;
          })
      })

  }

  editfactur(id:any){
    this.router.navigate([`editfactur/${id}`]);

  }

  editdevis(id:any){
    this.router.navigate([`editdevis/${id}`]);
  }

  addfactur(){
    this.router.navigate(['addfactur']);
  }
  adddevis(){
    this.router.navigate(['adddevis']);
  }
  addemploye(){
    this.router.navigate(['addemploye']);
  }


  downloadpdf(){
    this.addService.getPdf().subscribe(
      (data)=>{
      console.log(data.message);
      }
      )
      

  }
  closealert(){
    this.alert=false;
  }



}
