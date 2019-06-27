import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor( private http: HttpClient) { }

  getRestaurants(){
    const url= "https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json";
     return this.http.get(url);
  }


}
