import { AuthService } from './../../@core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    userData: any;
    constructor(protected router: Router, public authService: AuthService) {
        this.userData = this.authService.getUserData;
    }

    ngOnInit() {}

    navigateTo(url: string) {
        this.router.navigate([url]);
    }
}
