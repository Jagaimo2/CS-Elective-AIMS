import {EventEmitter, Injectable, Output} from '@angular/core';
import {LoginService} from "../../login/login.service";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../login/user.model";
import {NgForm} from "@angular/forms";
import {MessageModel} from "./message.model";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  currentLength = 0;
  alumni: UserModel[] = [];
  undergrads: UserModel[] = [];
  chatRecipient: any;
  @Output() messages = new EventEmitter<MessageModel[]>();

  constructor(private http: HttpClient,
              private loginService: LoginService) { }

  getStudents(){
    this.alumni = [];
    this.undergrads = [];

    this.http.get(`${this.loginService.path}/students`).subscribe((response: any) => {
      for(let alumnus of response.alumni) {
        let newAlumnus = new UserModel(alumnus.id,
          alumnus.first_name,
          alumnus.last_name,
          alumnus.course,
          alumnus.yearLevelandBlock,
          alumnus.studentCategory);

        this.alumni.push(newAlumnus);
      }

      for(let undergrad of response.undergrads){
        let newUndergrad = new UserModel(undergrad.id,
          undergrad.first_name,
          undergrad.last_name,
          undergrad.course,
          undergrad.yearLevelandBlock,
          undergrad.studentCategory);

        this.undergrads.push(newUndergrad);
        console.log(newUndergrad);
      }

      if(this.loginService.currentUser.studentCategory == 'Alumnus'){
        let user: any = this.alumni.find(alumnus => alumnus.id == this.loginService.currentUser.id);
        let index = this.alumni.indexOf(user, 0);
        this.alumni.splice(index, 1)
      }
      else if(this.loginService.currentUser.studentCategory == 'Undergraduate'){
        let user: any = this.undergrads.find(undergrad => undergrad.id == this.loginService.currentUser.id);
        let index = this.undergrads.indexOf(user, 0);
        this.undergrads.splice(index, 1)
      }
    })
  }

  getMessages(id: string, category: string){
    if(category == 'Alumnus'){
      this.chatRecipient = this.alumni.find(alumnus => alumnus.id == id);
    }
    else if (category == 'Undergraduate'){
      this.chatRecipient = this.undergrads.find(undergrad => undergrad.id == id);
    }


    this.http.get(`${this.loginService.path}/messages/${this.loginService.currentUser.id}/${this.chatRecipient.id}`)
      .subscribe((response: any) => {

        let retrieved_messages: MessageModel[] = [];
        for(let message of response.messages){
          let newMessage = new MessageModel(message.id,
                                            message.content,
                                            message.date_sent,
                                            message.sender,
                                            message.recipient);

          retrieved_messages.push(newMessage);
        }

        this.listen(retrieved_messages);
      });

    setTimeout(() => {
      this.getMessages(id, category)
    }, 2000)
  }

  listen(messages: MessageModel[]){
    this.messages.emit(messages);
    console.log(messages);
  }

  sendMessage(recipient: string, form: NgForm){
    if(form.valid){
      let formData = new FormData();
      formData.append('recipient', recipient);
      formData.append('content', form.value.content);

      this.http.post(`${this.loginService.path}/messages/${this.loginService.currentUser.id}/${recipient}`, formData)
        .subscribe((response: any) => {
          if(response.message == 'message received!'){
            this.getMessages(recipient, this.chatRecipient.studentCategory);

            let messageContainer: any;
            messageContainer = document.getElementById('messageField');
            messageContainer.value = "";
            form.resetForm();
          }

          let chatContainer: any;
          chatContainer = document.getElementById('chat');
          console.log(chatContainer.scrollTop);
          console.log(chatContainer.scrollHeight);
          chatContainer.scrollTop = 500;
        })
    }
  }
}
