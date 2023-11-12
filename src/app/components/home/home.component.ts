import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private snackBar:MatSnackBar) {
  }
  ngOnInit(): void {
  }

  buttonClick(){
    console.log("on button click");
    this.snackBar.open("Hey Welcome", "Cancel");
  }

}
