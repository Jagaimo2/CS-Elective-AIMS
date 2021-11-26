import { Component, OnInit } from '@angular/core';
import {ForumService} from "./forum.service";

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {

  constructor(public forumService: ForumService) { }

  ngOnInit(): void {
    this.forumService.getForums();
  }

}
