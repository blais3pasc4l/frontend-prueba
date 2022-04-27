import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { servicio } from 'src/app/models/servicio';
import { servicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-listar-servicios',
  templateUrl: './listar-servicios.component.html',
  styleUrls: ['./listar-servicios.component.css']
})
export class ListarserviciosComponent implements OnInit {
  listservicios: servicio[] = [];

  constructor(private _servicioService: servicioService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerservicios();
  }


  obtenerservicios() {
    this._servicioService.getservicios().subscribe(data => {
      console.log(data);
      this.listservicios = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarservicio(id: any) {
    this._servicioService.eliminarservicio(id).subscribe(data => {
      this.toastr.error('El servicio fue eliminado con exito' ,'servicio Eliminado');
      this.obtenerservicios();
    }, error => {
      console.log(error);
    })
  }

}
