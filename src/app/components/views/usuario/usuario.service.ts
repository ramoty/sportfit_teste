import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Usuario } from "./usuario.model";
@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Usuario[]> {
    const url = `${this.baseUrl}/usuarios`;
    return this.http.get<Usuario[]>(url);
  }
}
