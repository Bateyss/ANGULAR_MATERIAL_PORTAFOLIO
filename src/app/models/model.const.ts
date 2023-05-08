import { Categoria, Marca, MarcaProducto, Producto, SubCategoria, SubCategoriaProducto } from "./models"

const producto1: Producto = {
    idProducto: 1,
    nombre: 'producto 1',
    productImgUrl: '1',
    productPrecio: 11.1111,
    productUnidad: 'C/U',
    productCodigo: '1ABC'
}

const producto2: Producto = {
    idProducto: 2,
    nombre: 'producto 2',
    productImgUrl: '2',
    productPrecio: 22.222,
    productUnidad: 'C/U',
    productCodigo: '2ABC'
}

const producto3: Producto = {
    idProducto: 3,
    nombre: 'producto 3',
    productImgUrl: '1',
    productPrecio: 333.3,
    productUnidad: 'LIB',
    productCodigo: '3ABC'
}

const marca1: Marca = {
    idMarca: 1,
    nombre: 'marca 1'
}

const marca2: Marca = {
    idMarca: 2,
    nombre: 'marca 2'
}

const categoria1: Categoria = {
    idCatetoria: 1,
    combre: 'categoria 1'
}

const categoria2: Categoria = {
    idCatetoria: 2,
    combre: 'categoria 2'
}

const subCategoria1: SubCategoria = {
    idSubCategoria: 1,
    categoria: categoria1,
    nombre: 'sub categoria 1'
}

const subCategoria2: SubCategoria = {
    idSubCategoria: 2,
    categoria: categoria1,
    nombre: 'sub categoria 2'
}

const subCategoria3: SubCategoria = {
    idSubCategoria: 3,
    categoria: categoria2,
    nombre: 'sub categoria 3'
}

const subCategoria4: SubCategoria = {
    idSubCategoria: 4,
    categoria: categoria2,
    nombre: 'sub categoria 2'
}

const marcaProducto1: MarcaProducto = {
    idMarcaProd: 1,
    marca: marca1,
    producto: producto1
}

const marcaProducto2: MarcaProducto = {
    idMarcaProd: 2,
    marca: marca1,
    producto: producto2
}

const marcaProducto3: MarcaProducto = {
    idMarcaProd: 3,
    marca: marca2,
    producto: producto3
}

const subCategoriaProducto1: SubCategoriaProducto = {
    idSubCatProd: 1,
    subCategoria: subCategoria1,
    producto: producto1
}

const subCategoriaProducto2: SubCategoriaProducto = {
    idSubCatProd: 2,
    subCategoria: subCategoria2,
    producto: producto1
}

const subCategoriaProducto3: SubCategoriaProducto = {
    idSubCatProd: 3,
    subCategoria: subCategoria3,
    producto: producto2
}

const subCategoriaProducto4: SubCategoriaProducto = {
    idSubCatProd: 4,
    subCategoria: subCategoria4,
    producto: producto2
}

const subCategoriaProducto5: SubCategoriaProducto = {
    idSubCatProd: 5,
    subCategoria: subCategoria4,
    producto: producto3
}

const subCategoriaProducto6: SubCategoriaProducto = {
    idSubCatProd: 6,
    subCategoria: subCategoria1,
    producto: producto3
}

export const listProcutos: Array<Producto> = [producto1, producto2, producto3, producto1, producto2, producto1, producto2];

export const listMarcas: Array<Marca> = [marca1, marca2];

export const listCategorias: Array<Categoria> = [categoria1, categoria2];

export const listSubCategorias: Array<SubCategoria> = [subCategoria1, subCategoria2, subCategoria3, subCategoria4];

export const listMarcaProducto: Array<MarcaProducto> = [marcaProducto1, marcaProducto2, marcaProducto3];

export const listSubCategoriaProductos: Array<SubCategoriaProducto> = [subCategoriaProducto1, subCategoriaProducto2, subCategoriaProducto3, subCategoriaProducto4, subCategoriaProducto5, subCategoriaProducto6];