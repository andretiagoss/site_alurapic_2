import {Pipe, PipeTransform } from '@angular/core';

import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform{
    
    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase()

        if(descriptionQuery){
            // filtra a lista photos com o valor informado no campo (descriptionQuery) de pesquisa
            return photos.filter(photo => 
                photo.description.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return photos;
        }
    }
}