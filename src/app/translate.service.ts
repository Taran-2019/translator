import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TranslateService {
  data:any;

  constructor(private http: HttpClient) { }

  fetchTranslation(lang, translang, text):Observable <any>{
    return this.http.get(`https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20190628T075258Z.87e26b8018f91730.594ed7d4d2f935447e8b90b3a4907ab8a8424e6d&lang=${lang}-${translang}&text=${text}`);
  }


}
