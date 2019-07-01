import { Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RestaurantsService } from 'src/app/service/restaurants.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styles: []
})


export class MapaComponent implements OnChanges {
  arrMaps:any[] = [];
  Restaurant:any;
  zoom: number=20
  lat: number = 19.43451064586221;
  lng: number = -99.133588671354;
  arr:any[]
  constructor( private router: ActivatedRoute,
    private service: RestaurantsService){}
 

@Input() indexRestaurant:number=0; 


  ngOnChanges(){
    this.service.getRestaurants()
    .subscribe((data:any) => {
     this.arr = data;
      if(this.arr !=undefined){
      this.zoom=20;
        this.lat =this.arr[this.indexRestaurant].address.location.lat;
        this.lng= this.arr[this.indexRestaurant].address.location.lng;
       
    }
  });
  }
  

  
   

   
    
    
    
  

 

 
}
