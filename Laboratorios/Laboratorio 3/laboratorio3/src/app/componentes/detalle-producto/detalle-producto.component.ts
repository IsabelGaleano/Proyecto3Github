import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  productoActual:any = null;
  mensaje = '';

  constructor(
    private productosService: ProductosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mensaje = '';
    this.obtenerProducto(this.route.snapshot.paramMap.get('id'));
  }

  obtenerProducto(id: any): void {
    this.productosService.get(id)
      .subscribe(
        data => {
          this.productoActual = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  actualizarProducto(): void {
    this.productosService.update(this.productoActual.id, this.productoActual)
      .subscribe(
        response => {
          console.log(response);
          this.mensaje = 'El producto ha sido actualizado satisfactoriamente';
        },
        error => {
          console.log(error);
        });
  }

  borrarProducto(): void {
    this.productosService.delete(this.productoActual.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/productos']);
        },
        error => {
          console.log(error);
        });
  }

}
