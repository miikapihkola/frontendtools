import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { parseString } from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private httpClient: HttpClient) { }

  url: string = "https://www.finnkino.fi/xml/News/";
  testData = [{ 'Title': 'Ensi-ilta: PalmSprings', 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6124/PalmSprings_550.jpg' }, { 'Title': 'Ensi-ilta: Karjamäenjoulu', 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6123/JulPaKutoppen_550.jpg' }];

  getData(): Observable<any> {
    return this.httpClient.get(this.url, { responseType: "text" })
      .pipe(map(response => {
        //console.log("get xml data..." + response);
        let newsData: any;
        parseString(response, { trim: true, explicitArray: false, mergeAttrs: true },
          function (err: any, result: any) {
            newsData = result.News.NewsArticle;
            //console.log(JSON.stringify(newsData));
          });
        return newsData;
      }))
  }

  getTestData() {
    return of(this.testData)
  }
}
