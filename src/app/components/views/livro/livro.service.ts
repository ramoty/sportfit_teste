import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Livro } from "./livro.model";

@Injectable({
  providedIn: "root",
})
export class LivroService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  findAllByUsuario(id_usu: string): Observable<Livro[]> {
    const url = `${this.baseUrl}/livros?usuario=${id_usu}`;
    return this.http.get<Livro[]>(url);
  }
}
