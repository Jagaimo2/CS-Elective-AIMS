import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ForumModel} from "./forum.model";
import {CommentModel} from "./forum/comment.model";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {LoginService} from "../../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  forum: any;
  forums: ForumModel[] = [];

  comments: CommentModel[] = [];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private loginService: LoginService) { }

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

  getForum(id: string){
    this.forum = this.forums.find(forum => forum.id == id);
    console.log(this.forum.title);
  }

  getComments(id: string){
    this.comments = [];
    console.log(id);

    this.http.get(`http://127.0.0.1:8000/forums/${id}/comments`).subscribe((response: any) => {
      for(let comment of response.comments){
        let id = atob(comment.id);
        let content = atob(comment.content);
        let date = atob(comment.commentPostDate);
        let poster = atob(comment.comment_poster);
        let forum = atob(comment.referenced_forum);

        let newComment = new CommentModel(id, content, date, poster, forum);
        this.comments.push(newComment);
      }
    })
  }

  submitComment(form: NgForm){
    let formData = new FormData();
    formData.append('user', btoa(this.loginService.currentUser.id));
    formData.append('comment', btoa(form.value.content));
    formData.append('forum_id', btoa(this.forum.id));

    this.http.post(`http://127.0.0.1:8000/forums/createComment`, formData).subscribe((response: any) => {

      this.getComments(this.forum.id)
    })
  }
}
