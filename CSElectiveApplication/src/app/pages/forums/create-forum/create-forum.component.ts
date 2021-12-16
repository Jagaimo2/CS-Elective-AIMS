import { Component, OnInit } from '@angular/core';
import {ForumService} from "../forum.service";

@Component({
  selector: 'app-create-forum',
  templateUrl: './create-forum.component.html',
  styleUrls: ['./create-forum.component.css']
})
export class CreateForumComponent implements OnInit {

  constructor(public forum: ForumService) { }

  ngOnInit(): void {
  }
}
