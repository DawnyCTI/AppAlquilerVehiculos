import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './Reutilizable/shared/shared.module';

import { MatToolbarModule } from '@angular/material/toolbar';

// Importamos los componentes standalone
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { LayoutComponent } from './Components/layout/layout.component';




// No es necesario declarar los componentes standalone en el NgModule
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule, // MatToolbarModule sigue estando en imports
    AppComponent,     // Importamos el componente standalone
    LoginComponent,   // Importamos el componente standalone
    LayoutComponent,  // Importamos el componente standalone
  ],
  providers: [],
})
export class AppModule { }

