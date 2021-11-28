import { Component, OnInit } from '@angular/core';
import {ForumService} from "../forum.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(public forumService: ForumService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.forumService.getForum(this.activatedRoute.snapshot.params['id']);
  }

}
