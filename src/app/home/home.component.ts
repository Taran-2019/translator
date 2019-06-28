import { Component, OnInit } from '@angular/core';
declare var require: any;
const translate = require('../../../node_modules/google-translate-api');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
    console.dir(translate);
    translate('hello', {to:'es'}).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    });
  }

}
