import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Role } from '../model/role';

const host = 'http://localhost:8081/pfe/api/auth/';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getAllroles(): Observable<Role[]>{
    return this.http.get<Role[]>( host + 'roles');
  }
}

