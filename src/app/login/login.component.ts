import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { UserauthService } from '../services/userauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup;
  error:Boolean=false;
  constructor(private _fb: FormBuilder,private http: HttpClient, private userauth:UserauthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailFormControl: new FormControl('',[Validators.required]),
      passwordFormControl: new FormControl('',[Validators.required])
   });
   if(this.userauth.userloggedin()==true){
    this.router.navigate(['users']);
   }
  }
  
  login(){
    let data={
       email:this.loginForm.value.emailFormControl,
       password:this.loginForm.value.passwordFormControl
    }
     this.http.post("https://reqres.in/api/login", data).subscribe((res:any)=>{
       this.error=false;
       this.userauth.loginuser(res.token);
       this.router.navigate(['users'])
     },err=>{
        this.error=true;
     });
  }

}
