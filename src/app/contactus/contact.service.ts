import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  rootURL = 'http://localhost:8080/home';
  private mailApi = "https://formspree.io/f/mpznwkko";

  constructor(private http: HttpClient) { }

  // saveContact(user: any) {
  
  //   return this.http.post(this.rootURL + '/contact', user,
  //   {
  //     responseType: 'text'
  //   });
  //   }

    // saveUser(user: any) {
  
    //   return this.http.post(this.rootURL + '/user', user,
    //   {
    //     responseType: 'text'
    //   });
    //   }

      private handleError(httpError: HttpErrorResponse) {
        if (httpError.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', httpError.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${httpError.status}, ` +
            `body was: ${httpError.error}`);
        }
        // Return an observable with a user-facing error message.
        return throwError('Something bad happened; please try again later.');
      }

      saveContact(user: any) {
        return this.http.post(this.mailApi, user, { responseType: 'text' })
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

      saveUser(user: any) {
        return this.http.post(this.mailApi, user, { responseType: 'text' })
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
