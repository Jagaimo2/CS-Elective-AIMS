import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  signInMessage: string = 'SIGN IN';
  signInStatus: string = 'NOT SIGNED IN';

  constructor() { }

  setSignInStatus(status: string){
    this.signInStatus = status;
  }

  setSignInMessage(status: string){
    this.signInMessage = status;
  }
}
