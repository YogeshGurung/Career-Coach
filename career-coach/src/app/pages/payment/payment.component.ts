import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    paymentClicked = false;
    clickedOption: string = '';

    constructor(protected router: Router) {}

    ngOnInit() {}

    optionClicked(paymentName: string) {
        this.clickedOption = paymentName;
        this.paymentClicked = true;
    }

    continueToZoomMeeting() {
        this.router.navigate(['/zoom']);
    }
}
