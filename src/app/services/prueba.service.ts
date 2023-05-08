import { Injectable } from '@angular/core';
import { listCategorias, listMarcaProducto, listMarcas, listProcutos, listSubCategoriaProductos, listSubCategorias } from '../models/model.const';
import { Marca, ProductDto, SubCategoria } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor() { }

  public getCategorias() {
    return listCategorias;
  }

  public getSubCategorias() {
    return listSubCategorias;
  }

  public getMarcas() {
    return listMarcas;
  }

  public getProductos() {
    return listProcutos;
  }

  public getMarcasProductos() {
    return listMarcaProducto;
  }

  public getSubCatProds() {
    return listSubCategoriaProductos;
  }

  public obtenerProductosDtos() {
    var productosFormed: Array<ProductDto> = [];
    this.getProductos().forEach(element => {
      let marcasProducto: Marca[] = [];
      let subCategoriasProducto: SubCategoria[] = [];
      this.getMarcasProductos().forEach(ma => { if (ma.producto.idProducto == element.idProducto) marcasProducto.push(ma.marca) });
      this.getSubCatProds().forEach(sc => { if (sc.producto.idProducto == element.idProducto) subCategoriasProducto.push(sc.subCategoria) });

      productosFormed.push({
        productName: element.nombre,
        productImgUrl: element.productImgUrl,
        productPrice: element.productPrecio,
        productOfertPercent: 4,
        productOfertCuantity: 0.45,
        productOfertRealPrice: element.productPrecio,
        productOfertIniDate: new Date(),
        productOfertFinDate: new Date(),
        productUnity: element.productUnidad,
        productAddtocardCuantity: 0,
        productCode: element.productCodigo,
        productDisponibility: 'Aviable',
        hasDescuento: false,
        marcas: marcasProducto,
        subCategorias: subCategoriasProducto
      })
    });
    return productosFormed;
  }
}
