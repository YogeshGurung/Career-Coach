import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
    resultData: any;
    totalDataKey: Array<any> = [];
    constructor(protected router: Router) {
        let data = window.localStorage.getItem('gameResult');
        if (data) {
            this.resultData = JSON.parse(data);
            this.totalDataKey = Object.keys(this.resultData);
        }
    }

    ngOnInit() {
        if (this.resultData) {
            this.showResultData();
        }
    }
    showResultData() {
        console.log(this.resultData);
    }
    continueToDebriefing() {
        this.router.navigate(['/payment']);
    }
}
