import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    name: 'Header Base Project';

    public active: String;

    constructor(
        private route: ActivatedRoute,
        private router: Router
        ) { 
         }

    ngOnInit() {
        this.active = sessionStorage.getItem('token');
    }    

    logout(){    
        sessionStorage.setItem('token', '');
        this.router.navigate(['login']);        
    }
    activeSession(){
        return sessionStorage.getItem('token') != '';
    }


}
