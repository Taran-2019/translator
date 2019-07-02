import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { TranslateService } from '../translate.service';
import { formatedstringreturn } from '../formatedstringreturn';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges {



  abc:formatedstringreturn[]; 
  text:string;
  translang:string;
  secondDropdown=[];
  disableselect=true;
  langobj = {};
  dropdownObj = {};
  toggleme=false;
  toggleyou=false;
  xyz=[];
  selectedLanguage: any;
  
  constructor(private serviceObj:TranslateService) { }
 
  ngOnInit() {
   
   

      this.serviceObj.fetchLang().subscribe(data=>{
        this.langobj = data;
        this.assignDropdown();
        this.setDropdown();
        console.log(this.dropdownObj);
      });
      
  }

  ngOnChanges(textchanges:SimpleChanges):void{
    if(this.text==='')
    {this.abc=[];}
  }

assignDropdown(){
  
this.langobj['dirs'].forEach(item => {
  let splitted = item.split('-');
  if(this.dropdownObj.hasOwnProperty(splitted[0])) {
    this.dropdownObj[splitted[0]].push(splitted[1]);
  } else {
    this.dropdownObj[splitted[0]] = [];
    this.dropdownObj[splitted[0]].push(splitted[1]);
    }
  });
  }

setDropdown(){
  this.xyz = Object.keys(this.dropdownObj);
  console.log(this.xyz); 
}

// dropdownselected($event:string)
// {
//   this.lang=$event;
//   console.log($event);
// }

toggle(){
  this.toggleme = !this.toggleme;
}

toggletwo(){
  this.toggleyou = !this.toggleyou;
}

getTranslatedText() {
  console.log(this.selectedLanguage);
  console.log(this.text);
  console.log(this.translang);

  if((this.translang && this.selectedLanguage && this.text !==''))
  {  
       
      
        this.serviceObj.fetchTranslation(this.selectedLanguage,this.translang,this.text).subscribe(
        data=>{this.abc = data.text;
        console.log(this.abc);
      }
      );
     
    
  }
  if(this.text==='')
      {this.abc=[];} 
  
}

selectedLanguageChange() {
  console.log(this.selectedLanguage);
  console.log(this.text);
  this.disableselect=false;
  
  this.secondDropdown=this.dropdownObj[this.selectedLanguage];
  console.log(this.secondDropdown);



  if(this.translang && this.selectedLanguage && this.text !=='')
  {
    this.serviceObj.fetchTranslation(this.selectedLanguage,this.translang,this.text).subscribe(
      data=>{this.abc = data.text;
        console.log(this.abc);
      }
      );
  }
  if(this.text==='')
  {this.abc=[];}

  
}

translatedLanguage(){
  console.log(this.translang);
 
  if(this.translang && this.selectedLanguage && this.text !=='')
  {
    this.serviceObj.fetchTranslation(this.selectedLanguage,this.translang,this.text).subscribe(
      data=>{this.abc = data.text;
        console.log(this.abc);
      }
      );
  }

  if(this.text==='')
  this.abc=[];
}

}
