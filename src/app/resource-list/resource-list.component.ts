import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from '../services/userauth.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { LoginPopupComponent } from '../login-popup/login-popup.component';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  isloggedin:Boolean=false;
  resourcedata;
  pageno:number;
  totalpages:number;
  displayedColumns: string[] = ['id', 'name', 'year', 'pantone_value'];
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
      this.http.get("https://reqres.in/api/resource").subscribe((res:any)=>{
       console.log(res);
       this.pageno=res.page;
       this.totalpages=res.total_pages;
       this.resourcedata=res.data;
     },err=>{ });
    }
  }
  prev(){
    if(this.pageno!=1){
      this.pageno--;
      this.http.get("https://reqres.in/api/resource?page="+this.pageno).subscribe((res:any)=>{
           console.log(res);
           this.pageno=res.page;
           this.totalpages=res.total_pages;
           this.resourcedata=res.data;
         },err=>{ });
      }
    }
    
      next(){
        if(this.pageno!=this.totalpages){
          this.pageno++;
          this.http.get("https://reqres.in/api/resource?page="+this.pageno).subscribe((res:any)=>{
               console.log(res);
               this.pageno=res.page;
               this.totalpages=res.total_pages;
               this.resourcedata=res.data;
             },err=>{ });
          }
      }
}
