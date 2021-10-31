import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interfaceadmin',
  templateUrl: './interfaceadmin.component.html',
  styleUrls: ['./interfaceadmin.component.css']
})
export class InterfaceadminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    



  }

  //Dashboardadmin(){
    //this.router.navigate(["dashboardadmin"]);
  //}

  //admin(){
    //this.router.navigate(["addadmin"]);

  //}

  //Dashboardemploye(){
    //this.router.navigate(["dashboardemploye"]);

  //}

  home(){
    this.router.navigate([""]);

  }

}
