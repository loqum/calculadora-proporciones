import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProporcionesComponent } from './proporciones/proporciones.component';
import { ProporcionComponent } from './proporcion/proporcion.component';

@NgModule({
  declarations: [
    AppComponent,
    ProporcionesComponent,
    ProporcionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
