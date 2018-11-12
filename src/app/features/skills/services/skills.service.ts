import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/Skill';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class SkillsService {

  constructor(private http: HttpClient) { }

  getAll$(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${environment.backend}/skills`);
  }


  // public get<T>(data: any): T{
    // 1 -> Appel HTTP au serveur
    // 2 -> Reception des données sous forme de JSON non typé
    // 3 -> Retour de ce JSON casté en T
    //
}
