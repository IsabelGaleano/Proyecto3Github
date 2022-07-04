import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  producto = {
    nombre: '',
    descripcion: '',
    fechaFabricacion: '',
    numeroParte: 0,
    comentarios: ''
  };
  submitted = false;

  constructor(private productosService:ProductosService) { }

  ngOnInit(): void {
  }

  salvarProducto(): void {
    const data = {
      nombre: this.producto.nombre,
      descripcion: this.producto.descripcion,
      fechaFabricacion: this.producto.fechaFabricacion,
      numeroParte: this.producto.numeroParte,
      comentarios: this.producto.comentarios
    };

    this.productosService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  nuevoProducto(): void {
    this.submitted = false;
    this.producto = {
      nombre: '',
      descripcion: '',
      fechaFabricacion: '',
      numeroParte: 0,
      comentarios: ''
    };
  }


}
