export class servicio {
    _id?: number;
    fecha: number;
    fechaFin: string;
    servicio: string;

    constructor(fecha: number, fechaFin: string, servicio: string) {
        this.fecha = fecha;
        this.fechaFin = fechaFin;
        this.servicio = servicio;
    }
}
