import { CardService } from './../../@core/services/card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
    level1ResultData: any;
    level2ResultData: any;
    level1TotalDataKey: Array<any> = [];
    level2TotalDataKey: Array<any> = [];
    loading = false;
    savedCardData: any = [];
    constructor(protected router: Router, protected cardService: CardService) {}

    ngOnInit() {
        this.getResultData();
    }

    getResultData() {
        this.loading = true;
        this.cardService
            .getUsersCard()
            .then((data: any) => {
                this.loading = false;
                if (data['game-play']) {
                    if (data['game-play'].levelOneCard && !data['game-play'].levelTwoCard) {
                        if (data['appointment'] && data['appointment'].payment) {
                            return;
                        }
                        window.location.href = '/u/game/level2';
                    } else {
                        this.savedCardData = data;
                        this.level1ResultData = this.savedCardData['game-play'].levelOneCard;
                        this.level2ResultData = this.savedCardData['game-play'].levelTwoCard;
                        this.level1TotalDataKey = Object.keys(this.savedCardData['game-play'].levelOneCard);
                        this.level2TotalDataKey = Object.keys(this.savedCardData['game-play'].levelTwoCard);
                    }
                } else {
                    window.location.href = '/u/game/level1';
                }
            })
            .catch((err) => {
                this.loading = false;
            });
    }

    continueToDebriefing() {
        this.router.navigate(['/u/appointment']);
    }
}
