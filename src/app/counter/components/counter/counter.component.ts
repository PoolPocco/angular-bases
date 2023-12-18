import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>
      Bienvenue {{ counter }}
    </h3>
    <button (click)="incrementar( 1 )" ><h4>Incrementar</h4></button>
    <button (click)="resetear()" ><h4>Reset</h4></button>
    <button (click)="incrementar( -1 )" ><h4>Decrementar</h4></button>
    <input type="number" id="numero">
  `
})

export class CounterComponent implements OnInit {
  public counter:number = 10;

  constructor() { }

  incrementar( numero:number ):void{
    this.counter += numero;
  }

  resetear():void{
    this.counter = 10;
  }

  ngOnInit() { }
}
