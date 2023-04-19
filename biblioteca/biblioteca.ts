import {Libros} from "./libros";
export class Biblioteca{
private nombre: string;
private apellido: string;
private direccion: string;
private telefono:number;
private localidad:string;
private libro: Libros;
public constructor(paramNombre: string, paramApellido: string, paramDireccion: string, paramTelefono: number,paramLocalidad:string ,paramLibro: Libros){
this.nombre = paramNombre;
this.apellido = paramApellido;
this.direccion = paramDireccion;
this.telefono = paramTelefono;
this.localidad = paramLocalidad;
this.libro = paramLibro;
}

public setNombre(nombre:string){
  this.nombre = nombre;}

  public setApellido(apellido:string):void{
    this.apellido=apellido;}


    public setDireccion(direccion:string):void{
      this.direccion=direccion;
    }
      public setLocalidad(localidad:string):void{
        this.localidad=localidad;
      }

      public setTelefono(telefono:number):void{
      this.telefono=telefono}

      public getNombre():string{
        return this.nombre;
      }
      public getApellido():string{
        return this.apellido;
      }
      public getDireccion():string{
        return this.direccion;
      }

      public getLocalidad():string{
        return this.localidad;

      }
public getTelefono():number{
  return this.telefono;
  
}


public getInformacion(){

console.log(`
----------------------------- 
     DATOS DEL PRESTARIO
-----------------------------
NOMBRE: ${this.nombre}

APELLIDO:  ${this.apellido}

DIRECCION: ${this.direccion}}

TELEFONO: ${this.telefono}

LOCALIDAD: ${this.localidad}
------------------------------ 
       LIBRO
-----------------------------     
NOMBRE:${this.libro.getNombre()}
AUTOR: ${this.libro.getAutor()}
GENERO:${this.libro.getGenero()}
EDITORIAL: ${this.libro.getEditorial()} 
AÑO:${this.libro.getAño()}
}`)}
  
  
  public getInfo():Biblioteca{
return this
  }
}
