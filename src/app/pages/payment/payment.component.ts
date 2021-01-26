//import { Component, OnInit } from '@angular/core';
import { Component, AfterViewChecked } from '@angular/core';
declare const paypal: any;

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements AfterViewChecked {
    // paymentClicked = false;
    // clickedOption: string = '';

    // constructor() { }

    // ngOnInit() { }

    // optionClicked(paymentName: string) {
    //     this.clickedOption = paymentName;
    //     this.paymentClicked = true;
    // }

    addScript: boolean = false;
    finalAmount: number = 1;

    paypalConfig = {
        env: 'sandbox',
        client: {
            sandbox: 'Ad57UO6laRWza35dsvNL3-6FMCG_rNGcrD8Im5DIwPi3gGT2B7Z2rEck-KhVVKaWVmC172Ggv2R_zwki',
            production: '<my-production-key>'
        },
        commit: true,
        payment: (data, actions) => {
            return actions.payment.create({
                payment: {
                    transactions: [
                        { amount: { total: this.finalAmount, currency: 'AUD' } }
                    ]
                }
            });
        },
        onAuthorize: (data, actions) => {
            return actions.payment.execute().then((payment) => { 

            })
        }
    };
    ngAfterViewChecked(): void {
        if (!this.addScript) {
            this.addPaypalScript().then(() => {
                paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn')
            })
        }
    }

    addPaypalScript() {
        this.addScript = true;
        return new Promise((resolve, reject) => {
            let scripttagElement = document.createElement('script');
            scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement);
        })

    }

}
