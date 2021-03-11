import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class CalendarService {
    constructor(private http: HttpClient) { }

    day(userid: string, date: Date) {

        console.log(userid, date);


        return this.http.post<any>(`${environment.apiUrl_nine}/calendar/day`, { userid, date })
            .pipe(map(data => {
                return data;
            }));
    }


}
