import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUsers } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersuserService {
  // Url da nossa api
  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  // ResponseUsers, foi aonde referenciamos em nossa api, user.model.ts
  // Observable, ele chama e fica observando
  // Quando chamarmos o getUsers, ficamos aguardando o retorno, e quando der o retorno vamos fazer alguma coisa
  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url);
  }
}
