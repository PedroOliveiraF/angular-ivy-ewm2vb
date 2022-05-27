import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Produto } from './produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private urlBase = environment.urlBase;

  constructor(private http: HttpClient) {}

  public getProdutos(): Observable<Produto[]> {
    return this.http.get<any>(`${this.urlBase}/products`);
  }
}
