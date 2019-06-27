import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/service/restaurants.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: []
})
export class FilterComponent implements OnInit {
  orderRestaurants:any=[];

  constructor( private serviceRestaurant: RestaurantsService) {
    this.serviceRestaurant.getRestaurants()
      .subscribe( data=>{
        this.orderRestaurants= data;
      })
  }

  ngOnInit() {
  } 

}
