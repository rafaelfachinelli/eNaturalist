import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OqueEElixoComponent } from './pages/oque-e-elixo/oque-e-elixo.component';

const routes: Routes = [
  { path: "", redirectTo: "/oqueeelixo", pathMatch: 'full' },
  { path: "oqueeelixo", component: OqueEElixoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
