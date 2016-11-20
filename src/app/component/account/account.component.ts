import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {
  title = "My Account";
  constructor() { }

  ngOnInit() {
  }

}
