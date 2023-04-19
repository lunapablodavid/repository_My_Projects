 export class Libros{
   private nombre: string;
 private autor:string;
   private genero:string;
  private editorial:string;
  private año:number;

    public constructor(paramNombre:string,paraAutor:string, paramGenero:string, paramEditorial:string, paramAño:number){
     this.nombre = paramNombre;
     this.autor = paraAutor;
     this.genero = paramGenero;
     this.editorial = paramEditorial;
      this.año = paramAño;
    }


    public setNombre(nombre:string):void{
      this.nombre = this.nombre;
   }
 public setAutor(autor:string):void{
   this.autor = this.autor;
   }
   public setGenero(genero:string):void{
   this.genero = this.genero;
   }
   public setAño(año:string):void{
      this.año = this.año;
   }
   public setEditorial(editorial:string):void{
      this.editorial=this.editorial;
   }
 


public getNombre():string{
 return this.nombre;
}
public getAutor():string{
return this.autor;
}
public getGenero():string{
return this.genero;
}
public getAño():number{
  return this.año;
}
public getEditorial():string{
  return this.editorial;
}

public getInfoLibro():void {
console.log("hola")
}
}

