import { NgModule } from '@angular/core';
// Removed incorrect import of AppRoutingModule
import { LayoutComponent } from './Components/layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import path from 'path';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'pages', loadChildren: () => import('./Components/layout/layout.module').then(m => m.LayoutModule) },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
