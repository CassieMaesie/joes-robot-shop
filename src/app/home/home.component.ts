import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bot-home',
  templateUrl: './home.component.html',
  //template: '<p class="red">Inline home works!</p>',
  styleUrls: ['./home.component.css']
  //styles: ['.red {color:red;}']
})
export class HomeComponent implements OnInit {
  constructor() {} 

  ngOnInit(): void {
    
  }
}
