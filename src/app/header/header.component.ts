import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from '../services/userauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() page:String;
  @Input() isloggedin:Boolean=false;
  constructor( private userauth:UserauthService,private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.userauth.logoutuser();
    this.router.navigate([""]);
  }
}
