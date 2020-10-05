import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { EcopointComponent } from './components/ecopoint/ecopoint.component';
import { OqueEElixoComponent } from './pages/oque-e-elixo/oque-e-elixo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EcopointComponent,
    OqueEElixoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
