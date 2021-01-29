import { CardService } from './../@core/services/card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../@core/services/auth.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    loading = true;
    levelOneCompleted = false;
    levelTwoCompleted = false;
    paymentHasAlreadyBeenDone = false;
    constructor(protected router: Router, public authService: AuthService, protected cardService: CardService) {}

    ngOnInit() {
        if (this.authService.isLoggedIn) {
            const cardData = this.cardService.getUsersCard();
            cardData
                .then((data: any) => {
                    this.loading = false;
                    if (data['appointment'] && data['appointment'].payment) {
                        this.paymentHasAlreadyBeenDone = true;
                    }
                    if (data['game-play']) {
                        if (data['appointment'] && data['appointment'].payment) {
                            return;
                        }
                        if (data['game-play'].levelOneCard && !data['game-play'].levelTwoCard) {
                            this.levelOneCompleted = true;
                        } else {
                            this.levelTwoCompleted = true;
                        }
                    }
                })
                .catch((err) => {
                    this.loading = false;
                });
        } else {
            this.loading = false;
        }
    }

    navigateTo(URL: string) {
        this.router.navigate([URL]);
    }
}
