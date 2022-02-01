import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private baseUrl = environment.baseUrl;
  private themeHeaders = {
    headers: new HttpHeaders({
      'content-type':'application/json',
      Authorization:'Bearer ' + localStorage.getItem("token"),
    }),
  }

  constructor(private http: HttpClient) { }

  getThemes(){
    return this.http.get(this.baseUrl + "api/Theme", this.themeHeaders);
  }
}
