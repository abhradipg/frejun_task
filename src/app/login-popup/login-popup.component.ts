import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginPopupComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
