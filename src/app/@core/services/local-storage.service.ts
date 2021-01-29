import * as CryptoJS from 'crypto-js';
import { Injectable } from '@angular/core';

const ENCRYPT_SECRET_KEY = 'PqaFh1ql*a0X';
@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    deleteLocalStorage = (key: string): void => {
        localStorage.removeItem(key);
    };

    setLocalStorageData = (key: string, data: any): void => {
        const value = JSON.stringify(this.encryptData(JSON.stringify(data)));
        localStorage.setItem(key, value);
    };

    getLocalStorageData = (key: string): any => {
        const localData = localStorage.getItem(key);
        if (localData) {
            const data = JSON.parse(localData);
            return this.decryptData(data);
        }
    };

    clearAllLocalStorageData = (): void => {
        localStorage.clear();
    };

    encryptData = (data: any): string => {
        try {
            return CryptoJS.AES.encrypt(data, ENCRYPT_SECRET_KEY).toString();
        } catch (e) {
            console.log(e);
            return '';
        }
    };

    decryptData = (data: any): any => {
        try {
            if (!!data) {
                const bytes = CryptoJS.AES.decrypt(data, ENCRYPT_SECRET_KEY);
                if (bytes.toString()) {
                    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                }
            }
            return data;
        } catch (e) {
            console.log(e);
        }
    };
}
