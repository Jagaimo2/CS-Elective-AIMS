import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {JobModel} from "./job.model";
import {LoginService} from "../../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobs: JobModel[] = [];
  job: any;

  constructor(private login: LoginService, private http: HttpClient, private route: Router) { }

  getJobs(){
    this.jobs = [];
    this.http.get(`${this.login.path}/jobs`).subscribe((response: any) => {
      for(let job of response.jobs){
        let newJob = new JobModel(job.id,
          job.title,
          job.description,
          job.date,
          job.poster,
          job.availability);

        this.jobs.push(newJob);
      }
    })
  }

  viewOffer(id: string){
    this.job = this.jobs.find(job => job.id == id);
    this.route.navigate([`/jobs/${id}`])
  }
}
