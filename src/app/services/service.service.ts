import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlAPI='https://jsonplaceholder.typicode.com/todos';

  constructor(private http:HttpClient) { }

  Data():Observable<string[]>{
    return this.http.get<string[]>(this.urlAPI)
  }


}
