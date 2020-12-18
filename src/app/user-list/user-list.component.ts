import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from '../services/userauth.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { LoginPopupComponent } from '../login-popup/login-popup.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  isloggedin:Boolean=false;
  userdata;
  pageno:number;
  totalpages:number;
  constructor( private userauth:UserauthService,private router: Router,private http: HttpClient,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isloggedin=this.userauth.userloggedin();
    if(this.isloggedin==false){
      const dialogConfig=new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.width="450px";
      const dialogRef = this.dialog.open(LoginPopupComponent,dialogConfig);
  
      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['']);
      });
    }
    else{
      this.http.get("https://reqres.in/api/users").subscribe((res:any)=>{
       console.log(res);
       this.pageno=res.page;
       this.totalpages=res.total_pages;
       this.userdata=res.data;
     },err=>{ });
    }
  }

  prev(){
if(this.pageno!=1){
  this.pageno--;
  this.http.get("https://reqres.in/api/users?page="+this.pageno).subscribe((res:any)=>{
       console.log(res);
       this.pageno=res.page;
       this.totalpages=res.total_pages;
       this.userdata=res.data;
     },err=>{ });
  }
}

  next(){
    if(this.pageno!=this.totalpages){
      this.pageno++;
      this.http.get("https://reqres.in/api/users?page="+this.pageno).subscribe((res:any)=>{
           console.log(res);
           this.pageno=res.page;
           this.totalpages=res.total_pages;
           this.userdata=res.data;
         },err=>{ });
      }
  }

}
