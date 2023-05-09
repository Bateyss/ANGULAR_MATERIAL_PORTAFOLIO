import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductDto } from '../models/models';
import { HttpContext } from '@angular/common/http';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css', '../app.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() productList: Array<ProductDto> = [];

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  aumentraCantidad(datos: ProductDto) {
    datos.productAddtocardCuantity = Number(datos.productAddtocardCuantity) + 1;
  }

  disminuirCantidad(datos: ProductDto) {
    if (datos.productAddtocardCuantity > 0)
      datos.productAddtocardCuantity = Number(datos.productAddtocardCuantity) - 1;
  }

  cambiarCantidad(e: any, datos: ProductDto) {
    datos.productAddtocardCuantity = Number(e.target.value);
  }

  applyResize(element: HTMLDivElement) {
    let size = Number(element?.offsetWidth);
    let templateGridCols = 'repeat(1, 1fr)';
    if (size > 620) templateGridCols = 'repeat(2, 1fr)';
    if (size > 1000) templateGridCols = 'repeat(3, 1fr)';
    if (size > 1500) templateGridCols = 'repeat(4, 1fr)';
    if (size > 1920) templateGridCols = 'repeat(5, 1fr)';
    element?.style.setProperty('width', '100%');
    element?.style.setProperty('grid-template-columns', templateGridCols);
  }

  prepareSrcImagen(src: string) {
    var urr = window.location.pathname;
    var pathn = urr.substring(0, urr.lastIndexOf('/'));
    console.log(pathn);
    return pathn + src;
  }

}
