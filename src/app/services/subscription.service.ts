import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private baseUrl = environment.baseUrl;
  private subscriptionHeaders = {
    headers: new HttpHeaders({
      'content-type':'application/json',
      Authorization:'Bearer ' + localStorage.getItem("token"),
    }),
  }
  constructor(private http: HttpClient) {

   }

   getSubscriptions(){
    return this.http.get(this.baseUrl + "api/Subscription", this.subscriptionHeaders);
  }
}
