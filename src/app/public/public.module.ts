import  { NgModule } from '@angular/core';
import { ShareModule } from '../core/share/components/shared..moule';
import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.component';
import { PublicRoutingMoule } from './public-routing.module';
import { PublicComponent } from './public.component';
@NgModule({
    imports:[
        PublicRoutingMoule,
        ShareModule
    ],
    declarations:[
        PublicComponent,
        HomeComponent,
        LoginComponent
    ],
    exports:[],
    providers:[]
})
export class PublicModule{
    constructor(){}
}