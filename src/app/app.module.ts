import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { LayoutComponent } from './Components/layout/layout.component';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserAnimationsModule,
        LoginComponent,
        LayoutComponent,
        AppComponent,
    ],
    providers: [],
    bootstrap: []
    })
export class AppModule { }
