import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class UserService {

    constructor(private http:HttpClient){
        console.log("servicio usuario listo");
    }

    save(data: any){
        const url = 'http://localhost:8080/user/create';
   
        console.log(data);    
        this.http.post(url, data)
        .subscribe(data =>{
            console.log(data);
        });        
        
    }

}
