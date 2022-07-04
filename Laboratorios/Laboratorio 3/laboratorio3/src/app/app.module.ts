import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProductoComponent,
    AgregarProductoComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
