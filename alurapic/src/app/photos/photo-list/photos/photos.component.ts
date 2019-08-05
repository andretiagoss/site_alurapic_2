import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {
  
  @Input() photos: Photo[] = [];
  rows: any[] = [];
  
  constructor() { }

  //A interface ngOnChanges é utilizado para saber se uma Inbound Property sofreu alterações para efetuar uma determinada ação.
  ngOnChanges(changes: SimpleChanges) {
    //executa o método groupColumns toda vez que a propriedade photos sofrer alterações.
    if(changes.photos)
      this.rows = this.groupColumns(this.photos);
  }

  //método com logica para criar um array de fotos com no maximo de 3 fotos por linha
  groupColumns(photos: Photo[]){
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3){
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }

}
