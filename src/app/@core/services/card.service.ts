import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable, NgZone } from '@angular/core';
import 'firebase/auth';
import { LocalStorageService } from './local-storage.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CardService {
    userId: any;
    private dbPath = '/cards';
    cardListRef: any;

    constructor(protected db: AngularFireDatabase, public ngZone: NgZone, protected localStorageService: LocalStorageService) {
        const user = this.localStorageService.getLocalStorageData('user');
        if (user) {
            this.cardListRef = db.list(this.dbPath + '/' + user.uid);
        }
    }

    getCardItemsList(): any {
        return this.cardListRef.snapshotChanges();
    }

    createCardAsPerLevel(key: string, card: any) {
        this.cardListRef.set(key, card);
    }

    createAppointment(key: string, card: any) {
        return this.cardListRef.set(key, card);
    }

    updateCardAsPerLevel(key: string, value: any) {
        return this.cardListRef.update(key, value);
    }

    deleteCardAsPerLevel(key: string) {
        this.cardListRef.remove(key);
    }

    async getUsersCard() {
        return new Promise((resolve, reject) => {
            this.getCardItemsList().subscribe(
                (data: any) => {
                    let returnData: any = {};
                    data.map((val: any) => {
                        returnData[val.key] = val.payload.val();
                    });
                    resolve(returnData);
                },
                (err: any) => {
                    reject(err);
                }
            );
        });
    }
}
