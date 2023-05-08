export interface FiltrosNode {
    nombre: string,
    chequeado:boolean,
    tipo: number,
    id: number,
    submenu?: FiltrosNode[]
}

export interface FlatNode {
    expandible: boolean,
    nombre: string,
    nivel: number,
    chequeado:boolean,
    tipo: number,
    id: number
}

export interface Marca {
    idMarca: number,
    nombre: string
}

export interface Categoria {
    idCatetoria: number,
    combre: string
}

export interface SubCategoria {
    idSubCategoria: number,
    categoria: Categoria,
    nombre: string
}

export interface Producto {
    idProducto: number,
    nombre: string,
    productImgUrl: string,
    productPrecio: number,
    productUnidad: string,
    productCodigo: string
}

export interface SubCategoriaProducto {
    idSubCatProd: number,
    subCategoria: SubCategoria,
    producto : Producto
}

export interface MarcaProducto {
    idMarcaProd: number,
    marca: Marca
    producto : Producto
}

export interface ProductDto {
    productName: string,
    productImgUrl: string,
    productPrice: number,
    productOfertPercent: number,
    productOfertCuantity: number,
    productOfertRealPrice: number,
    productOfertIniDate: Date,
    productOfertFinDate: Date,
    productUnity: string,
    productAddtocardCuantity: number,
    productCode: string,
    productDisponibility: string,
    hasDescuento: boolean,
    marcas: Array<Marca>,
    subCategorias: Array<SubCategoria>
}