import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'Ironman';
  public age:number = 45;
  public changedName:boolean = false;
  public changedAge:boolean = false;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void{
    this.name = this.changedName == false ? 'Spiderman':'Ironman';
    this.changedName = this.changedName ? false:true;
  }

  changeAge():void{
    this.age = this.changedAge == false ? 30:45;
    this.changedAge = this.changedAge ? false:true;
  }

  resetForm():void{
    this.name = 'Ironman';
    this.age = 45;
    this.changedAge = false;
    this.changedName = false;
  }
}
