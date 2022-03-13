import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  
  heroes: string[] = ['Spiderman','Iroman','Hulk','Tork','Capitan America'];
  public heroeBorrado: string = '';
  seBorro: boolean = false;
  borrarHeroe(){
    this.heroeBorrado =  this.heroes.shift() || '';
    this.seBorro = true;
    console.log(this.heroeBorrado);
  }

}
