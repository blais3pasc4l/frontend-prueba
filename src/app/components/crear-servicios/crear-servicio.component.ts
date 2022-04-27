import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { servicio } from 'src/app/models/servicio';
import { servicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.css']
})
export class CrearservicioComponent implements OnInit {
  servicioForm: FormGroup;
  titulo = 'Crear servicio';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _servicioService: servicioService,
              private aRouter: ActivatedRoute) {
    this.servicioForm = this.fb.group({
      servicio: ['', Validators.required],
      fecha: ['', Validators.required],
      fechaFin: ['', Validators.required],
      // precio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarservicio() {

    const servicio: servicio = {
      servicio: this.servicioForm.get('servicio')?.value,
      fecha: this.servicioForm.get('fecha')?.value,
      fechaFin: this.servicioForm.get('fechaFin')?.value,
      // precio: this.servicioForm.get('precio')?.value,
    }

    console.log(servicio);
    this._servicioService.guardarservicio(servicio).subscribe(data => {
      this.toastr.success('El servicio fue registrado con exito!', 'servicio Registrado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.servicioForm.reset();
    })


  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar servicio';
      this._servicioService.obtenerservicio(this.id).subscribe(data => {
        this.servicioForm.setValue({
          servicio: data.nombre,
          fecha: data.fecha,
          fechaFin: data.fechaFin,
          // precio: data.precio,
        })
      })
    }
  }

}
