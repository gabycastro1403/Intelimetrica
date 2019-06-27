import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/service/restaurants.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  restaurants:any =[];
  constructor(private restaurant: RestaurantsService) {
    this.restaurant.getRestaurants()
    .subscribe( data =>{
      console.log(data);
      this.restaurants= data;
    })
   }

 
  ngOnInit() {
  }

}
