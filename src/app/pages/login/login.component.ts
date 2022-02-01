import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public text:string = "";
  public isDisabled:boolean = false;
  public user: User = {
    email:"test@test.com",
    password:"",
  };
  public error: boolean | string = false;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.text = "TEST";
  }

  doLogin():void{
    this.error = false;
    console.log("Login clicked", this.user)
    if(this.validateEmail(this.user.email)){
      this.authService.login(this.user).subscribe((response:any) =>{
        console.log(response);
        if(response && response.token){
          localStorage.setItem("token",response.token);
          this.router.navigate(['/dashboard']);
        }
      })
    }
    else{
      this.error = 'This email is not valid';
    }
  }

  validateEmail(email: string) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
  }

  ngOnChanges() {}
  ngOnDestroy() {}

}
