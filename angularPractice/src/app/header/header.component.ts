import { Component, OnInit } from '@angular/core';
import { HeaderModule } from "./header.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sample = new HeaderModule("Karl", "Programmer", "testvalue");

  constructor() { }

  ngOnInit(): void {
  }

}
