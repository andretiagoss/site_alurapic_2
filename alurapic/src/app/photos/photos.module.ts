import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';

@NgModule({
    declarations: [ 
        PhotoComponent, 
        PhotoListComponent, 
        PhotoFormComponent, 
        PhotosComponent,
        FilterByDescription 
    ],
    imports: [
        HttpClientModule, //usado para fazer as requisições na Api
        CommonModule //torna disponivel as diretivas do Angular (NgFor, NgIf, etc)
    ] 
})
export class PhotosModule{}