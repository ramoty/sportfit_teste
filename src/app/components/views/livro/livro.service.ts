import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Livro } from "./livro.model";

@Injectable({
  providedIn: "root",
})
export class LivroService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAllByUsuario(id_usu: string): Observable<Livro[]> {
    const url = `${this.baseUrl}/livros?usuario=${id_usu}`;
    return this.http.get<Livro[]>(url);
  }

  findById(id: string): Observable<Livro> {
    const url = `${this.baseUrl}/livros/${id}`;
    return this.http.get<Livro>(url);
  }
  update(livro: Livro): Observable<Livro> {
    const url = `${this.baseUrl}/livros/${livro.id}`;
    return this.http.put<Livro>(url, livro);
  }

  create(livro: Livro, id_usu: string): Observable<Livro> {
    const url = `${this.baseUrl}/livros?usuario=${id_usu}`;
    return this.http.post<Livro>(url, livro);
  }

  mensagem(str: string): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}
