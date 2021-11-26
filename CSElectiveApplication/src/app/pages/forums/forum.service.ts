import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ForumModel} from "./forum.model";

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  forums: ForumModel[] = [];
  constructor(private http: HttpClient) { }

  getForums(){
    this.forums = [];

    this.http.get('http://127.0.0.1:8000/forums').subscribe((response: any) => {
      for(let forum of response.forums){
        let id = atob(forum.id);
        let title = atob(forum.title);
        let content = atob(forum.content);
        let datePosted = atob(forum.datePosted);
        let poster = atob(forum.poster);

        let newForum = new ForumModel(id, title, content, datePosted, poster);
        this.forums.push(newForum);
      }
    })
  }
}
