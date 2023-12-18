import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] = ['Spiderman','Ironman','Hulk'];
  //public heroNames:string[] = ['1','2','3','4'];
  public deletedHero?:string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
    //if(this.heroNames.length == 0) this.heroNames.unshift("kanguman");
    if(this.deletedHero !== undefined) this.heroNames.unshift(this.deletedHero);
  }
}
