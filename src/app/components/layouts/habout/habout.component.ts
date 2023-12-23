import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-habout',
  templateUrl: './habout.component.html',
  styleUrls: ['./habout.component.css']
})
export class HaboutComponent implements OnInit {

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  // About img
  aboutimg1 = 'assets/img/feature/04.jpg';
  aboutimg2 = 'assets/img/feature/05.jpg';
  aboutbottomimg = 'assets/img/bg/03.jpg';
  ngOnInit(): void {
  }

}
