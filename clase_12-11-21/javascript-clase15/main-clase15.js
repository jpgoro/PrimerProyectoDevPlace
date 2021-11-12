const log = console.log

/* 1-
 arr = [1,3,4,2,6,7,9,1, 8]
Crear una función que indique el total de elementos impares de un array
 output => 5 */
//===========================================================
function impar(){
arr = [1,3,4,2,6,7,9,1, 8]
let cont= 0;
arr.map((item,indx)=>{
    return (item%2 != 0)? cont+=1:0;
})
}


/* 2-
  str = "hola mundo desde javascript"
  pasar un string en array, reemplazar los espacios en blanco por "-"
  output => ["hola", "mundo", "-", "desde", "-", "javascript"] */
//===============

let str = "hola mundo desde javascript";
let str2=str.replace(/ /g, '-');
log(str2);


/* 3-
Crear una variable que contenga el siguiente array :
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Definir una variable filtered que muestre los valores de los los numeros que son pares utilizando el método .filter() */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let par = arr.filter(value => value%2==0);
log(par);

/* 4- Crear una variable que filtre los animales que no sean 'cat' usar filter
const pets = ['cat', 'dog', 'elephant','hawk','snake','cat'] */
pets = ['cat', 'dog', 'elephant','hawk','snake','cat']
const result = pets.filter(nocat => nocat != "cat");
log(result);

/* 5- Crear una variable que muestre solo los nombres de los productos del siguiente array
hacerlo con .map
const productos = [
    {id:2, nombre: 'Remera muy fachera', precio:250},
    {id:5, nombre: 'Pantalon muy fachero', precio:400},
    {id:6, nombre: 'Camperon invierno', precio:699},
    {id:34, nombre: 'Guantes negros', precio:199},
]; */
const productos = [
    {id:2, nombre: 'Remera muy fachera', precio:250},
    {id:5, nombre: 'Pantalon muy fachero', precio:400},
    {id:6, nombre: 'Camperon invierno', precio:699},
    {id:34, nombre: 'Guantes negros', precio:199},
];
let nombres = productos.map((item)=>item.nombre);
log(nombres);

/* 6-  Usando el reduce retornar un solo array. pista: .concat
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; */
data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let arr =data.reduce((arr1, arr2) => arr1.concat(arr2));
log(arr);

