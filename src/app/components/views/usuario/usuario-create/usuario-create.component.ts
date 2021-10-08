import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioService } from "../usuario.service";
import { Usuario } from "./../usuario.model";

@Component({
  selector: "app-usuario-create",
  templateUrl: "./usuario-create.component.html",
  styleUrls: ["./usuario-create.component.css"],
})
export class UsuarioCreateComponent implements OnInit {
  usuario: Usuario = {
    nome: "",
    descricao: "",
  };
  constructor(private service: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  create(): void {
    this.service.create(this.usuario).subscribe(
      (resposta) => {
        this.router.navigate(["usuarios"]);
        this.service.mensagem("Usuário criado com sucesso!");
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem(err.error.errors[i].message);
        }
      }
    );
  }
}
