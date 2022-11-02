import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _UserService:UserService) { }
userdeatils:any[]=[];
  ngOnInit(): void {
    this._UserService.getdetails().subscribe({
next:(respons)=> this.userdeatils=respons
    })
  }

}
