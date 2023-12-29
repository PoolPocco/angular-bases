import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList:Character[] = [{
    name: "Trunks",
    power: 13
  }];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: number):void {
    //TODO emitir id
    console.log({index});
    this.onDelete.emit(index);
  }

  onDeleteCharacterById(index?: string):void {
    if( !index ) return;

    this.onDeleteById.emit(index)
  }
}
