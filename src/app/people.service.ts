import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Person {
  name: string
}

@Injectable({ providedIn: 'root' })
export class PeopleService {
  constructor(private http: HttpClient) {
  }

  fetchPeople(): Observable<Person> {
    // const params = new HttpParams()
    //   .set('id', '123')
    //   .set('includeAddress', 'true');
    // return this.http.get<Person>('/assets/data/people.json', { params });

    // const newPerson = { name: 'Pete' };
    // return this.http.post<Person>('/assets/data/people.json', newPerson);

    return this.http
               // .get<Person>('/assets/data/unavailable.json');
               .get<Person>('/assets/data/people.json');
  }
}
