import { Component } from '@angular/core';
interface IDatos{
   id:number;
   nombre:string;
   OperacionDestino?:IOperacion;
}
interface IOperacion{
  id:number;
  nombre:string;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular';
  datos:IDatos;
  data: IDatos[] = [];
  dataOperacion:IOperacion[] = [];
ngOnInit() {
    this.dataFicticia();
  }
  
  cambioSelect(id:number) {
    console.log(this.dataOperacion);
  }
  
  dataFicticia(){

    this.datos = {
      id:1,
      nombre:"Pegar asdf pech + pergar sup"
    }
    this.data.push(this.datos);
    this.dataOperacion.push(this.datos);

    this.datos = {
      id:2,
      nombre:"Cortar asdf pech + pergar sup"
    }
    this.data.push(this.datos);
    this.dataOperacion.push(this.datos);

    this.datos = {
      id:3,
      nombre:"Coser asdf pech + pergar sup"
    }
    this.data.push(this.datos);
    this.dataOperacion.push(this.datos);

    this.datos = {
      id:5,
      nombre:"Remall asdf pech + pergar sup"
    }
    this.data.push(this.datos);
    this.dataOperacion.push(this.datos);

    this.datos = {
      id:3,
      nombre:"AGDSA asdf pech + pergar sup"
    }
    this.data.push(this.datos);
    this.dataOperacion.push(this.datos);
  }

  activado(id:number){
    this.idSeleccionItem =id;
    this.seleccionItem=true;
  }

  onClickCerrarVentana() {
    this.cerrar.emit();
  }

}