import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  user: any = {};
  findedUser: any;

  constructor(private formBuilder: FormBuilder, private router: Router,private userService:UserService) { }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({

      email: [''],
      password: ['']


    })
  }
  login(){
    console.log('user',this.user);


    this.userService.login(this.user).subscribe(
      (data)=>{
        console.log(data.findedUser)

        this.findedUser= data.findedUser
        localStorage.setItem("connecterUser",JSON.stringify(this.findedUser));
        switch (this.findedUser.role) {
          case "employe":
            this.router.navigate(['interfaceemploye']);
            
            break;
            case "admin":
              this.router.navigate(['interfaceadmin']);
            break;
            
  
        
          default:
            break;
        }
      }
    )
    
  }

      
}
