import { Projet } from './../model/Projet';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const host = 'http://localhost:8081/pfe/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http: HttpClient) { }

  getAllprojets(): Observable<Projet[]>{
    return this.http.get<Projet[]>( host + 'projet/projets');
  }

  UpdateProjet( id: String , projet: Projet): Observable<Projet>{

    return this.http.put< Projet >( host +  'projet/modiferProjet/' + id , projet);
}

deleteProjet(id: number): Observable<Projet>{

    return this.http.delete<Projet>( host + 'projet/supprimerProjet/' +  id);
}
addProjet ( projet: Projet): Observable<Projet> {
  return this.http.post<Projet>(host +  'projet/ajouterProjet/' ,projet);
}
}
