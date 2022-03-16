import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import {throwError} from "rxjs";

export interface AuthResponseData{
    kind:string;idToken:string;email:string;refreshToken:string;
    expiresIn:string;localId:string;registered?:boolean;
}
@Injectable({providedIn:'root'})
export class AuthService{
    constructor(private http:HttpClient){

    }
    signup(email:string,password:string){
        return this.http.post<AuthResponseData>
        ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDEdoUOR5QgRh1PitYfmOul9sq8BXE7EgY',
        {email:email,password:password,returnSecureToken:true});
        
    }

    login(email:string,password:string){
        return this.http.post<AuthResponseData>
        ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDEdoUOR5QgRh1PitYfmOul9sq8BXE7EgY',
        {email:email,password:password,returnSecureToken:true});

    }


}