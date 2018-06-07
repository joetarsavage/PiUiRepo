import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //sets messages to blank array
  messages: string[] = [];
  
  //adds a message to the array
  add(message: string){
	this.messages.push(message);
  }
  
  //clears the messages array
  clear(){
  this.messages = [];
  }
}
