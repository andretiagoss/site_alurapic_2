import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  //Por convenção de boas praticas o constructor é destinado para injeção de dependência
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ){ }

  //Por convenção de boas praticas, qualquer inicialização posterior deve ser feito no ngOnInit
  ngOnInit():void{

     //Requisição do tipo Get com retorno do tipo observable.
     //const observable = http.get('http://localhost:3000/flavio/photos');
     //subscribe do observable para realizar o request.
     //observable.subscribe();

    //atraves do ActivatedRoute é possivel extrair o parametro userName da URL 
    //para realizar o request com um endpoint dinâmico. 
    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoService
     .listFromUser(userName)
     .subscribe(photos =>this.photos = photos);      
  }

}
