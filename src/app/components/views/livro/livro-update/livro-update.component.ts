import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../livro.model";
import { LivroService } from "../livro.service";

@Component({
  selector: "app-livro-update",
  templateUrl: "./livro-update.component.html",
  styleUrls: ["./livro-update.component.css"],
})
export class LivroUpdateComponent implements OnInit {
  id_usu: string = "";
  livro: Livro = {
    id: "",
    titulo: "",
    nome_autor: "",
    texto: "",
  };

  titulo = new FormControl("", [Validators.minLength(3)]);
  nome_autor = new FormControl("", [Validators.minLength(3)]);
  texto = new FormControl("", [Validators.minLength(10)]);

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_usu = this.route.snapshot.paramMap.get("id_usu")!;
    this.livro.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  cancel(): void {
    this.router.navigate([`usuarios/${this.id_usu}/livros`]);
  }

  findById(): void {
    this.service.findById(this.livro.id!).subscribe((resposta) => {
      this.livro = resposta;
    });
  }

  update(): void {
    this.service.update(this.livro).subscribe(
      (resposta) => {
        this.router.navigate([`usuarios/${this.id_usu}/livros`]);
        this.service.mensagem("Livro atualizado com sucesso");
      },
      (err) => {
        this.router.navigate([`usuarios/${this.id_usu}/livros`]);
        this.service.mensagem("Falha ao atualizar livro! Tente mais tarde..");
      }
    );
  }

  getMessage() {
    if (this.titulo.invalid) {
      return "O campo TITULO deve conter entre 3 e 100 caracteres";
    }
    if (this.nome_autor.invalid) {
      return "O campo NOME DO AUTOR deve conter entre 3 e 100 caracteres";
    }
    if (this.texto.invalid) {
      return "O campo TEXTO deve conter entre 10 e 2000000 caracteres";
    }
    return false;
  }
}
