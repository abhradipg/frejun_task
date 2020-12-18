import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  constructor() { }
  loginuser(token){
    localStorage.setItem("access_token",token);
  }
  logoutuser(){
    localStorage.removeItem("access_token")
  }
  userloggedin(){
    if(localStorage.getItem("access_token")!=null){
      return true;
    }
    return false;
  }
}
