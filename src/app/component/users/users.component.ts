import { Component, OnInit } from '@angular/core';
import {DataService} from "../../service/data.service";
import {Response} from "@angular/http";
import {User} from "../../model/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[DataService]
})
export class UsersComponent implements OnInit {
  private  users :User[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers()
      .subscribe(
        (data:Response) => Array.prototype.push.apply(this.users, data.json())
      );

  }

}
