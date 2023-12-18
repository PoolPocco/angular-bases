import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = 'XD';
  public counter:number = 10;

  incrementar( numero:number ):void{
    this.counter += numero;
  }

  resetear():void{
    this.counter = 10;
  }
}
