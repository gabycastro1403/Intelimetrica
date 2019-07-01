import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardsComponent } from './components/shared/cards/cards.component';
import { FilterComponent } from './components/filter/filter.component';
import { MapaComponent } from './components/mapa/mapa.component';

//PIPES
import { OrderPipe } from './pipes/order.pipe';
import { OrderRaitingPipe } from './pipes/order-raiting.pipe';

//Google maps
import { AgmCoreModule } from '@agm/core';
import { RaitingComponent } from './components/raiting/raiting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardsComponent,
    FilterComponent,
    OrderPipe,
    MapaComponent,
    RaitingComponent,
    OrderRaitingPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3uUbVPl8r6XDlcbyqU9h4Mxu9JNK_Mas'
    })
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
