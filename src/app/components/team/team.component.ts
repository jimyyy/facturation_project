import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  users:any;
  teams:any=[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {


    this.userService.getusers().subscribe(
      (data) => {
        console.log(data.users);
        this.users = data.users;
        console.log(this.users);

        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].role == "employe") {
            this.teams.push(this.users[i]);
          }
          
        }
        console.log(this.teams);

      })
  }

}
