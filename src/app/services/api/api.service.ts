import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  post(endpoint:string,obj:object){
    return this.http.post<any>(`${endpoint}`,obj)
  }

  get(endpoint : string ,obj? : HttpParams ){
    return this.http.get<any>(`${endpoint}`,{params:obj})
  }


}
