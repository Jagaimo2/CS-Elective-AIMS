import {AfterViewChecked, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MessageService} from "./message.service";
import {MessageModel} from "./message.model";

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit, AfterViewChecked{

  @ViewChild('chat') private myScrollContainer: any;
  @Input() messages: MessageModel[] = [];

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.getStudents();
    this.messageService.messages.subscribe((message: MessageModel[]) => {
      this.messages = message;
    })
  }

  ngAfterViewChecked() {
    this.scrollToBottom()
  }

  showStudents(category: string){
    let alumni: any;
    let undergraduates: any;

    alumni = document.getElementById('alumni');
    undergraduates = document.getElementById('undergraduates');

    if(category == 'alumni'){
      alumni.style.display = 'none';
      undergraduates.style.display = 'block';
    }
    else {
      alumni.style.display = 'block';
      undergraduates.style.display = 'none';
    }
  }

  scrollToBottom() {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }
}
