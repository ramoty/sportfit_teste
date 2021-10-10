import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../livro.model";
import { LivroService } from "../livro.service";

@Component({
  selector: "app-livro-read-all",
  templateUrl: "./livro-read-all.component.html",
  styleUrls: ["./livro-read-all.component.css"],
})
export class LivroReadAllComponent implements OnInit {
  displayedColumns: string[] = ["id", "titulo", "livros", "acoes"];

  id_usu: string = "";
  livros: Livro[] = [];

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_usu = this.route.snapshot.paramMap.get("id_usu")!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByUsuario(this.id_usu).subscribe((resposta) => {
      this.livros = resposta;
    });
  }

  navegarParaLivroCreate(): void {
    this.router.navigate([`usuarios/${this.id_usu}/livros/create`]);
  }
}
