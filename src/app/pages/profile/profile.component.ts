import { AuthService } from './../../@core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    userData: any;
    constructor(public authService: AuthService) {
        this.userData = this.authService.getUserData;
    }

    ngOnInit() {}
}
