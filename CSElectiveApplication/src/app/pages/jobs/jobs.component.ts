import { Component, OnInit } from '@angular/core';
import {JobService} from "./job.service";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(public job: JobService) { }

  ngOnInit(): void {
    this.job.getJobs();
  }

}
