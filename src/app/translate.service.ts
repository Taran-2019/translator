import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';


@Injectable()
export class TranslateService {
  data:any;
  baseURL:string;
  

  constructor(private http: HttpClient) { }

  fetchTranslation(selectedLanguage, translang, text):Observable <any>{
    console.log(selectedLanguage);
    console.log(translang);
    //  this.baseURL='https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190628T075258Z.87e26b8018f91730.594ed7d4d2f935447e8b90b3a4907ab8a8424e6d';
    //  let langcomb= new HttpParams().set('text',text);
    //  return this.http.get(this.baseURL+'&lang='+selectedLanguage+'-'+translang+{langcomb});
    
    return this.http.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190628T075258Z.87e26b8018f91730.594ed7d4d2f935447e8b90b3a4907ab8a8424e6d&lang=${selectedLanguage}-${translang}&text=${text}`);
  }

  fetchLang():Observable<any>{
  return this.http.get('https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20190628T075258Z.87e26b8018f91730.594ed7d4d2f935447e8b90b3a4907ab8a8424e6d');
  
  }
}
