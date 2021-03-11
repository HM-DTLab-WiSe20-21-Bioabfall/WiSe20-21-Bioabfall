import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }


    private loggedIn = new BehaviorSubject<boolean>(false); // {1}

    get isLoggedIn() {
        const user = localStorage.getItem('currentUser');
        if (user != null) {
          this.loggedIn.next(true);
        }

        return this.loggedIn.asObservable(); // {2}
      }


    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl_nine}/account/login`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.loggedIn.next(true);
                    return user;
                }

                return null;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.loggedIn.next(false);
    }

    getCurrentUser() {
      return JSON.parse(localStorage.getItem('currentUser'));
    }
}
