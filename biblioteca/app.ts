import { Libros } from './libros';
import { Biblioteca } from './Biblioteca';


let libro1:Libros =new Libros("El cuervo, bonito, y lindo", "Edgar Alan Poe","Drama / Terror","Editorial Alma",1845)
//console.log(libro1.getInfoLibro());
let prestario1:Biblioteca= new Biblioteca("Pablo","Luna","Las Flores1",22444444,"Las Flores", libro1)
console.log(prestario1.getInformacion());