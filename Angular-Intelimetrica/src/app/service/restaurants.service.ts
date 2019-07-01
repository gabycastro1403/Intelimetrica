import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  indice:number=0;

  constructor( private http: HttpClient) { }

  getRestaurants(){
    const url= "https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json";
     return this.http.get(url);
  }

 getLocation(){
   const url ="https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json";
   return this.http.get(url)
  /*   .pipe( map( data=> data[])) */
 }


}
