import { CardService } from './../../@core/services/card.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router } from '@angular/router';
import { levelOneCard, levelTwoCard } from '../../@core/constants/card-data';

interface ICardData {
    data1: any;
    data2: any;
    data3: any;
    data4: any;
    data5: any;
    data6: any;
}

interface ICard {
    title: string;
    description: string;
}
let $this: any;
@Component({
    selector: 'app-card-drag',
    templateUrl: './card-drag.component.html',
    styleUrls: ['./card-drag.component.scss']
})
export class CardDragComponent implements OnInit {
    loading = false;
    levelOneCard = levelOneCard;
    levelTwoCard = levelTwoCard;
    barrier: Array<ICard> = [];
    couldDoWithout: Array<ICard> = [];
    essentialForSatisfation: Array<ICard> = [];
    niceToHave: Array<ICard> = [];
    totalCardColumn = 6;
    cardData = ['data1', 'data2', 'data3', 'data4', 'data5', 'data6'];
    totalCard: Array<ICard> = [];
    savedCardData: any = [];
    currentLevel: string = 'Level 1';
    cardListData: ICardData = {
        data1: [],
        data2: [],
        data3: [],
        data4: [],
        data5: [],
        data6: []
    };

    constructor(protected router: Router, protected cardService: CardService, private route: ActivatedRoute) {
        $this = this;
    }

    ngOnInit() {
        const level = this.route.snapshot.params['level'];
        if (level !== 'level1' && level !== 'level2') {
            this.router.navigate(['/']);
        }
        if (level === 'level1') {
            this.currentLevel = 'Level 1';
            this.startGame(this.levelOneCard);
        }
        if (level === 'level2') {
            this.currentLevel = 'Level 2';
            this.startGame(this.levelTwoCard);
        }
        this.checkIfAlreadyPlayed(level);
    }

    checkIfAlreadyPlayed(level: string) {
        this.loading = true;
        this.cardService
            .getUsersCard()
            .then((data: any) => {
                this.loading = false;
                this.savedCardData = data;
                if (data['game-play']) {
                    if (data['appointment'] && data['appointment'].payment) {
                        return;
                    }
                    if (data['game-play'].levelOneCard && !data['game-play'].levelTwoCard) {
                        if (level === 'level1') {
                            window.location.href = '/u/game/level2';
                        }
                    } else if (data['game-play'].levelOneCard && data['game-play'].levelTwoCard) {
                        if (level === 'level1' || level === 'level2') {
                            window.location.href = '/u/result';
                        }
                    }
                } else {
                    if (level === 'level2') {
                        window.location.href = '/u/game/level1';
                    }
                }
            })
            .catch((err) => {
                this.loading = false;
            });
    }

    startGame(gameLevelData: any) {
        this.totalCard = [...gameLevelData];
        this.getEqualCard(this.totalCard);
    }

    getEqualCard(gameCardData: any) {
        const amountFraction = gameCardData.length / this.totalCardColumn;
        const amount = Math.round(amountFraction);

        const cardContent = this.shuffleArray(gameCardData);
        for (let j = 0; j <= amount; j++) {
            for (let i = 0; i < this.cardData.length; i++) {
                if (i === 0 && cardContent[0]) this.cardListData.data1.push(cardContent[0]);
                if (i === 1 && cardContent[0]) this.cardListData.data2.push(cardContent[0]);
                if (i === 2 && cardContent[0]) this.cardListData.data3.push(cardContent[0]);
                if (i === 3 && cardContent[0]) this.cardListData.data4.push(cardContent[0]);
                if (i === 4 && cardContent[0]) this.cardListData.data5.push(cardContent[0]);
                if (i === 5 && cardContent[0]) this.cardListData.data6.push(cardContent[0]);
                cardContent.shift();
            }
        }
    }

    shuffleCard() {
        for (let item in this.cardData) {
            this.cardListData.data1 = this.shuffleArray(this.cardListData.data1);
            this.cardListData.data2 = this.shuffleArray(this.cardListData.data2);
            this.cardListData.data3 = this.shuffleArray(this.cardListData.data3);
            this.cardListData.data4 = this.shuffleArray(this.cardListData.data4);
            this.cardListData.data5 = this.shuffleArray(this.cardListData.data5);
            this.cardListData.data6 = this.shuffleArray(this.cardListData.data6);
        }
    }

    shuffleArray(array: any) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    drop(event: CdkDragDrop<ICard[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }

        this.checkIfLevelCompleted();
    }

    checkIfLevelCompleted() {
        const totalSelectedCard = this.barrier.length + this.couldDoWithout.length + this.essentialForSatisfation.length + this.niceToHave.length;
        if ((totalSelectedCard === this.levelOneCard.length && this.currentLevel === 'Level 1') || (totalSelectedCard === this.levelTwoCard.length && this.currentLevel === 'Level 2')) {
            this.showResult();
        }
    }

    showResult() {
        let levelCard;
        if (this.currentLevel === 'Level 2') {
            levelCard = {
                levelOneCard: this.savedCardData['game-play'].levelOneCard,
                levelTwoCard: this.getResult()
            };
            this.cardService.createCardAsPerLevel('game-play', levelCard);
            window.location.href = '/u/result';
        } else {
            levelCard = { levelOneCard: this.getResult() };
            this.cardService.createCardAsPerLevel('game-play', levelCard);
            window.location.href = '/u/game/level2';
        }
    }

    getResult() {
        return {
            barrier: {
                title: 'Barrier',
                value: this.barrier
            },
            couldDoWithout: {
                title: 'Could Do Without',
                value: this.couldDoWithout
            },
            essentialForSatisfation: {
                title: 'Essential For Satisfation',
                value: this.essentialForSatisfation
            },
            niceToHave: {
                title: 'Nice To Have',
                value: this.niceToHave
            }
        };
    }
}
