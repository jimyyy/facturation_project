import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interfaceemploye',
  templateUrl: './interfaceemploye.component.html',
  styleUrls: ['./interfaceemploye.component.css']
})
export class InterfaceemployeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  //Dashboardemploye(){
    //this.router.navigate(["dashboardemploye"]);

  //}

  home(){
    this.router.navigate([""]);

  }

}
