import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {
  currentPage: string = 'HOMEPAGE';

  constructor() { }

  ngOnInit(): void {
  }

}
