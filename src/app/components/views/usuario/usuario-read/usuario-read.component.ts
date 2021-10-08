import { Component, OnInit } from "@angular/core";
import { Usuario } from "../usuario.model";
import { UsuarioService } from "../usuario.service";

@Component({
  selector: "app-usuario-read",
  templateUrl: "./usuario-read.component.html",
  styleUrls: ["./usuario-read.component.css"],
})
export class UsuarioReadComponent implements OnInit {
  usuarios: Usuario[] = [];
  displayedColumns: string[] = ["id", "nome", "descricao", "livros", "acoes"];
  constructor(private service: UsuarioService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.usuarios = resposta;
    });
  }
}
