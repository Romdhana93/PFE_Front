import { Role } from './../model/role';
import { Observable } from 'rxjs';
import { User } from './../model/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const host = 'http://localhost:8081/pfe/api/auth/';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){}

  getAllUsers(): Observable<User[]>{
      return this.http.get<User[]>( host + 'user/users');
  }

/*
  searchProducts(keyword:string):Observable<Product[]>{
      return this.http.get<Product[]>( host+"/products?name_like="+keyword);
  }
*/
  // tslint:disable-next-line:ban-types
  UpdateUser( id: String , user: User): Observable<User>{

      return this.http.put< User >( host +  'user/modiferUser/' + id , user);
  }

  deleteUser(id: number): Observable<User>{

      return this.http.delete<User>( host + 'user/supprimerUser/' +  id);
  }

  register(username: string, email: string, password: string, role: any): Observable<any> {
    return this.http.post(host + 'signup', {
      username,
      email,
      password,
       role 
    });
  }

 // tslint:disable-next-line:ban-types
 getUserById(id: String ): Observable<User[]>{
    return this.http.get<User[]>( host + 'user/userById/' + id);

  }
}
