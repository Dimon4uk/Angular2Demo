import {Component, OnInit, Input} from '@angular/core';
import {DataService} from "../../service/data.service";
import {Response} from "@angular/http";
import {User} from "../../model/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers:[DataService]
})
export class UsersComponent implements OnInit {
  title = "Users";
  users :User[] = [
    new User('admin', 'admin@admin.com', 'admin', 'admin',  '093 1234567' )
  ];

  constructor(private dataService: DataService) {
    // Array.prototype.push(this.users, this.dataService.getUsers()).apply();
  }

  ngOnInit() {
    // Array.prototype.push(this.users, this.dataService.getUsers());
      // .subscribe(
      //   (data:Response) => Array.prototype.push.apply(this.users, data.json())
      // );

  }

}
