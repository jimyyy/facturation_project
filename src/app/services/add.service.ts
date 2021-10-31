import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  SERVER_URL: string = "http://localhost:3000";

  constructor(private httpClient:HttpClient) { }


  public createadd(add){
    return this.httpClient.post<{message : string}>(`${this.SERVER_URL + '/api/add'}`, add)
  }


   public getadds(){ 
    return this.httpClient.get<{adds:any}>(this.SERVER_URL + '/api/alladds');
  } 

  public deleteadd(id){
    return this.httpClient.delete<{message:string}>(`${this.SERVER_URL + '/api/deleteadd'}/${id}`)
 }

 public updateadd(add) {
  return this.httpClient.put<{message:string}>(`${this.SERVER_URL + '/api/updateadd'}/${add._id}`, add)
}

public getadd(id){
  return this.httpClient.get<{add:any}>(`${this.SERVER_URL + '/api/alladds'}/${id}`); 
}
public createconges(add){
  return this.httpClient.post<{message : string}>(`${this.SERVER_URL + '/api/addconges'}`, add)
}
public getconges(){ 
  return this.httpClient.get<{adds:any}>(this.SERVER_URL + '/api/allconges');
} 

public deleteconges(id){
  return this.httpClient.delete<{message:string}>(`${this.SERVER_URL + '/api/deleteconges'}/${id}`)
}
public getconge(id){
  return this.httpClient.get<{add:any}>(`${this.SERVER_URL + '/api/allconge'}/${id}`); 
}
public updateconges(add) {
  return this.httpClient.put<{message:string}>(`${this.SERVER_URL + '/api/updateconges'}/${add._id}`, add)
}
getPdf(){
  return this.httpClient.get<{ message: String}>(`${this.SERVER_URL}/adds/generateFile/pdf`);
  }



}
