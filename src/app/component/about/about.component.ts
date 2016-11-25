import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  title = "About Us";
  // initial center position for the map
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {
  }

  ngOnInit() {
  }

}
