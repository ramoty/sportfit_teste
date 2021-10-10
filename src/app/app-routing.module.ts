import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/views/home/home.component";
import { LivroReadAllComponent } from "./components/views/livro/livro-read-all/livro-read-all.component";
import { UsuarioCreateComponent } from "./components/views/usuario/usuario-create/usuario-create.component";
import { UsuarioDeleteComponent } from "./components/views/usuario/usuario-delete/usuario-delete.component";
import { UsuarioReadComponent } from "./components/views/usuario/usuario-read/usuario-read.component";
import { UsuarioUpdateComponent } from "./components/views/usuario/usuario-update/usuario-update.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "usuarios",
    component: UsuarioReadComponent,
  },
  {
    path: "usuarios/create",
    component: UsuarioCreateComponent,
  },
  {
    path: "usuarios/delete/:id",
    component: UsuarioDeleteComponent,
  },
  {
    path: "usuarios/update/:id",
    component: UsuarioUpdateComponent,
  },
  {
    path: "usuarios/:id/livros",
    component: LivroReadAllComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
