import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Usuario } from "./usuario.model";
@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Usuario[]> {
    const url = `${this.baseUrl}/usuarios`;
    return this.http.get<Usuario[]>(url);
  }

  create(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/usuarios`;
    return this.http.post<Usuario>(url, usuario);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}
