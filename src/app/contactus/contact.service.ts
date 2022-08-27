import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private mailApi = 'https://mailthis.to/codeninja';

  rootURL = 'http://localhost:8080/home';

  constructor(private http: HttpClient) { }

  saveContact(user: any) {
  
    return this.http.post(this.rootURL + '/contact', user);
    }

    saveUser(user: any) {
  
      return this.http.post(this.rootURL + '/user', user);
      }

  PostMessage(input: any) {
    return this.http.post(this.mailApi, input, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            }else{
              return null;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }
}
