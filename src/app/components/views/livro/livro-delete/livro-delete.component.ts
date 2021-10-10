import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../livro.model";
import { LivroService } from "../livro.service";

@Component({
  selector: "app-livro-delete",
  templateUrl: "./livro-delete.component.html",
  styleUrls: ["./livro-delete.component.css"],
})
export class LivroDeleteComponent implements OnInit {
  id_usu: string = "";
  livro: Livro = {
    id: "",
    titulo: "",
    nome_autor: "",
    texto: "",
  };

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
  delete(): void {
    this.service.delete(this.livro.id!).subscribe(
      () => {
        this.router.navigate([`usuarios/${this.id_usu}/livros`]);
        this.service.mensagem("Livro deletado com sucesso!");
      },
      (err) => {
        this.router.navigate([`usuarios/${this.id_usu}/livros`]);
        this.service.mensagem("Falha ao deletar livro! Tente mais tarde!");
      }
    );
  }
}
