import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { FlatNode, FiltrosNode, Marca, SubCategoria } from '../models/models';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  @Input() marcasList: Array<Marca> = [];
  @Input() subCategoriasList: Array<SubCategoria> = [];
  @Output() filtrosEvent = new EventEmitter<FiltrosNode>();

  emmitNewItem(node: FiltrosNode) {
    this.filtrosEvent.emit(node);
  }

  checked(node: FiltrosNode) {
    this.emmitNewItem(node);
  }

  private flatNodeTransformer = (node: FiltrosNode, nivel: number) => {
    return {
      expandible: !!node.submenu && node.submenu.length > 0,
      nombre: node.nombre,
      nivel: nivel,
      chequeado: node.chequeado,
      tipo: node.tipo,
      id: node.id
    };
  };

  public menuControl = new FlatTreeControl<FlatNode>(
    node => node.nivel,
    node => node.expandible
  );


  treeFlattener = new MatTreeFlattener(
    this.flatNodeTransformer,
    node => node.nivel,
    node => node.expandible,
    node => node.submenu
  );

  public menuDataSource = new MatTreeFlatDataSource(this.menuControl, this.treeFlattener);
  private filtrosIniciales: FiltrosNode[] = [];

  ngOnInit(): void {
    this.filtrosIniciales = this.generarFiltros();
    this.menuDataSource.data = this.filtrosIniciales;
  }

  hasChild = (_: number, node: FlatNode) => node.expandible;

  onClickNode = (node: FlatNode) => {
    console.log('clocked', node.nombre);
  }

  generarFiltros() {
    let filtros: FiltrosNode[] = [];
    let filtroInicial: FiltrosNode = {
      nombre: 'FILTROS',
      chequeado: false,
      tipo: 0,
      id: 0,
      submenu: []
    }
    let filtroMarca: FiltrosNode = {
      nombre: 'MARCAS',
      chequeado: false,
      tipo: 0,
      id: 1,
      submenu: []
    }
    let filtroSubCategorias: FiltrosNode = {
      nombre: 'SUB CATEGORIAS',
      chequeado: false,
      tipo: 0,
      id: 2,
      submenu: []
    }
    if (this.marcasList) {
      this.marcasList.forEach(element => {
        let filtro: FiltrosNode = {
          nombre: element.nombre,
          chequeado: false,
          tipo: 1,
          id: element.idMarca,
        }
        filtroMarca.submenu?.push(filtro);
      })
    }
    if (this.subCategoriasList) {
      this.subCategoriasList.forEach(element => {
        let filtro: FiltrosNode = {
          nombre: element.nombre,
          chequeado: false,
          tipo: 2,
          id: element.idSubCategoria,
        }
        filtroSubCategorias.submenu?.push(filtro);
      })
    }
    filtroInicial.submenu = [filtroMarca, filtroSubCategorias]
    filtros = [filtroInicial];
    return filtros;
  }

}
