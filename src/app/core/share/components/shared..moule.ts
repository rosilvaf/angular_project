import  { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent} from './not-found/not-found.component'
import { RouterModule } from '@angular/router';
@NgModule({
    imports:[
        HttpClientModule,
        RouterModule
    ],
    declarations:[
        NotFoundComponent
    ],
    exports:[
        HttpClientModule,
        NotFoundComponent
    ],
    providers:[]
})
export class ShareModule{
    constructor(){}
}