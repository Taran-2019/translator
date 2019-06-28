import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serviceObj:TranslateService) { }
 
  ngOnInit() {
   
    this.serviceObj.fetchTranslation(lang,translang,text).subscribe();
  }

}
