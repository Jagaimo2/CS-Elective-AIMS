import { Component, OnInit } from '@angular/core';
import {JobService} from "../job.service";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor(public jobService: JobService) { }

  ngOnInit(): void {
  }

}
