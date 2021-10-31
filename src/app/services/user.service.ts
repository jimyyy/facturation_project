import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  SERVER_URL: string = "http://localhost:3000";

  constructor(private httpClient : HttpClient) { }


  public getusers(){ 
    return this.httpClient.get<{users:any}>(this.SERVER_URL + '/api/allusers');
  } 
  public getuser(id){
    return this.httpClient.get<{user:any}>(`${this.SERVER_URL + '/api/allusers'}/${id}`); 
  }
public createuser(user){
   return this.httpClient.post<{message : string}>(`${this.SERVER_URL + '/api/adduser'}`, user)
  }
  public deleteuser(id){
    return this.httpClient.delete<{message:string}>(`${this.SERVER_URL + '/api/deleteuser'}/${id}`)
 }
 public updateuser(user) {
    return this.httpClient.put<{message:string}>(`${this.SERVER_URL + '/api/updateuser'}/${user._id}`, user)
 }


 public login(user){
  return this.httpClient.post<{findedUser:any}>(this.SERVER_URL + '/api/login',user)
}








}

