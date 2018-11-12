import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Production } from '../models/Production';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductionsService {

  constructor(private http: HttpClient) { }

  getAll$(): Observable<Production[]> {
    return this.http.get<Production[]>(`${environment.backend}/productions`);
  }
}
