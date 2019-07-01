import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { RestaurantsService } from 'src/app/service/restaurants.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent implements OnInit {
  restaurantId:any;
  restaurantCoordenadas:any;
  index:number;
  showMap:boolean = false;

  
 @Input() arrRestaurants:any=[];
  
  constructor( private router: Router, private service: RestaurantsService) { }

  verRestaurant( index ){
   return this.index= index;
  }

 
    

  

  ngOnInit() {
  }

}
