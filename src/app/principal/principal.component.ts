import { Component, OnInit } from '@angular/core';
import { FiltrosNode, Marca, ProductDto, Producto, SubCategoria } from '../models/models';
import { PruebaService } from '../services/prueba.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private pruebaService: PruebaService) {
  }

  productList: Array<ProductDto> = [];
  productListInicial: Array<ProductDto> = [];
  marcasList: Array<Marca> = [];
  subCategoriasList: Array<SubCategoria> = [];
  filtrosSelected: Array<FiltrosNode> = []

  ngOnInit(): void {
    this.productListInicial = this.pruebaService.obtenerProductosDtos();
    this.productList = this.productListInicial;
    this.obtenerSubCategoriasFromProductosDtos();
    this.obtenerMarcasFromProductosDtos();
  }

  agregarFiltro(node: FiltrosNode) {
    if (!node.chequeado) {
      if (this.filtrosSelected.includes(node)) {
        this.filtrosSelected = this.filtrosSelected.filter(el => el.id != node.id);
      }
    } else {
      this.filtrosSelected.push(node);
    }
    this.filtrarProductos();
  }

  filtrarProductos() {
    if (this.filtrosSelected.length > 0) {
      let marcasSelected: Marca[] = [];
      let subCategSelected: SubCategoria[] = [];
      this.filtrosSelected.forEach(el => {
        if (el.tipo == 1) this.marcasList.forEach(mel => { if (mel.idMarca == el.id) marcasSelected.push(mel) });
        if (el.tipo == 2) this.subCategoriasList.forEach(sel => { if (sel.idSubCategoria == el.id) subCategSelected.push(sel) });
      })
      let listProductosFiltered: ProductDto[] = [];
      if (marcasSelected.length > 0) {
        marcasSelected.forEach(el => {
          this.productListInicial.forEach(prod => {
            if (prod.marcas.includes(el)) {
              if (!listProductosFiltered.includes(prod)) listProductosFiltered.push(prod);
            }
          })
        })
      }
      if (subCategSelected.length > 0) {
        subCategSelected.forEach(el => {
          this.productListInicial.forEach(prod => {
            if (prod.subCategorias.includes(el)) {
              if (!listProductosFiltered.includes(prod)) listProductosFiltered.push(prod);
            }
          })
        })
      }
      this.productList = listProductosFiltered;
    } else {
      this.productList = this.productListInicial;
    }
  }

  obtenerSubCategoriasFromProductosDtos() {
    let subCategoriasEncontradas: SubCategoria[] = [];
    this.productList.forEach(element => {
      element.subCategorias.forEach(sc => subCategoriasEncontradas.push(sc));
    });
    subCategoriasEncontradas.forEach(el => {
      if (!this.subCategoriasList.includes(el)) this.subCategoriasList.push(el);
    })
  }

  obtenerMarcasFromProductosDtos() {
    let marcasEntontradas: Marca[] = [];
    this.productList.forEach(element => {
      element.marcas.forEach(ma => marcasEntontradas.push(ma));
    });
    marcasEntontradas.forEach(el => {
      if (!this.marcasList.includes(el)) this.marcasList.push(el);
    })
  }

}
