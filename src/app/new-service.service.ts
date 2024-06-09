import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
private ApiUrl ='https://restaurant.stepprojects.ge/api/Products/GetAll'
  constructor(private Https:HttpClient) { }
  fetch():Observable<any>{
    return this.Https.get<any>(this.ApiUrl)
  }
}
