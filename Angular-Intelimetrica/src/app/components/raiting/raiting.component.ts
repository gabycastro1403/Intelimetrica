import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/service/restaurants.service';

@Component({
  selector: 'app-raiting',
  templateUrl: './raiting.component.html',
  styles: []
})
export class RaitingComponent implements OnInit {
arrayRating:any = [];
  constructor( private service: RestaurantsService) { 
    this.service.getRestaurants()
      .subscribe( data=> this.arrayRating= data);
  }

  ngOnInit() {
  }

}
