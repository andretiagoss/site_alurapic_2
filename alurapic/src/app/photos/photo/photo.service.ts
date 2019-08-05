import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000';

//Decorator Injectable é usado para ser possivel injetá-lo no component desejado.
//Com escopo raiz (root), ou seja, qualquer componente que desejar injetá-lo, o terá disponivel. 
@Injectable({providedIn: 'root'})
export class PhotoService{
    
    constructor(private http: HttpClient){}

    listFromUser(userName : string){
    //Requisição do tipo Get
     return this.http
     .get<Photo[]>(API + '/' + userName + '/photos');
    }
}