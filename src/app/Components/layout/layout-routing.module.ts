import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DashBoardComponent } from './Pages/dash-board/dash-board.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { VehiculoComponent } from './Pages/vehiculo/vehiculo.component';
import { VentaComponent } from './Pages/venta/venta.component';
import { HistorialVentaComponent } from './Pages/historial-venta/historial-venta.component';
import { ReporteComponent } from './Pages/reporte/reporte.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    { path: 'dashboard', component:DashBoardComponent },
    { path: 'usuario', component:UsuarioComponent },
    { path: 'vehiculo', component:VehiculoComponent },
    { path: 'venta', component:VentaComponent },
    { path: 'historial-venta', component:HistorialVentaComponent },
    { path: 'reporte', component:ReporteComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
