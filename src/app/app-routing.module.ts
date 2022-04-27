import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearservicioComponent } from './components/crear-servicios/crear-servicio.component';

// componentes
import { ListarserviciosComponent } from './components/listar-servicios/listar-servicios.component';

const routes: Routes = [
  { path: '', component: ListarserviciosComponent },
  { path: 'crear-servicio', component: CrearservicioComponent },
  { path: 'editar-servicio/:id', component: CrearservicioComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
