import { LocalStorageService } from './local-storage.service';
import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userData: any;

    constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth, public router: Router, public ngZone: NgZone, protected localStorageService: LocalStorageService) {
        this.afAuth.authState.subscribe((user: any) => {
            if (user) {
                this.userData = this.buildUserData(user);
                this.localStorageService.setLocalStorageData('user', this.userData);
            }
        });
    }

    get isLoggedIn(): boolean {
        const user = this.localStorageService.getLocalStorageData('user');
        if (user && user.displayName) {
            return true;
        } else {
            return false;
        }
    }

    GoogleAuth() {
        return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
    }

    AuthLogin(provider: any) {
        return this.afAuth
            .signInWithPopup(provider)
            .then((result: any) => {
                this.ngZone.run(() => {
                    this.router.navigate(['/']);
                });
                this.SetUserData(result.user);
            })
            .catch((error: any) => {
                window.alert(error);
            });
    }

    buildUserData(user: any) {
        return {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
    }

    SetUserData(user: any) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        const userData: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    }

    SignOut() {
        return this.afAuth.signOut().then(() => {
            this.localStorageService.clearAllLocalStorageData();
            window.location.href = '';
        });
    }

    get getUserData() {
        return this.localStorageService.getLocalStorageData('user');
    }
}
