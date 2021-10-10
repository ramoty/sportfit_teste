import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Usuario } from "../usuario.model";
import { UsuarioService } from "../usuario.service";

@Component({
  selector: "app-usuario-update",
  templateUrl: "./usuario-update.component.html",
  styleUrls: ["./usuario-update.component.css"],
})
export class UsuarioUpdateComponent implements OnInit {
  usuario: Usuario = {
    id: "",
    nome: "",
    descricao: "",
  };

  constructor(
    private service: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.usuario.id!).subscribe((resposta) => {
      this.usuario.nome = resposta.nome;
      this.usuario.descricao = resposta.descricao;
    });
  }
  update(): void {
    this.service.update(this.usuario).subscribe(
      (resposta) => {
        this.router.navigate(["usuarios"]);
        this.service.mensagem("Usuário atualizado com sucesso!");
      },
      (err) => {
        this.service.mensagem(
          "Validar se todos os campos estão preenchidos corretamente!"        );
        console.log(err);
      }
    );
  }
  cancel(): void {
    this.router.navigate(["usuarios"]);
  }
}
