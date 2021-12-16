export class MessageModel {
  constructor(public id: string,
              public content: string,
              public date: string,
              public sender: string,
              public recipient: string){}
}
