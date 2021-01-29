import { AuthService } from './../../@core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CardService } from './../../@core/services/card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultantsList } from 'src/app/@core/constants/consultants';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    paymentClicked = false;
    clickedOption: string = '';
    loading = false;
    appointmentData: any;
    consultantsList: any;
    selectedConsultant: any;
    paymentHasbeenDone = false;
    userData: any;
    constructor(protected router: Router, protected cardService: CardService, private _snackBar: MatSnackBar, public authService: AuthService) {
        this.userData = this.authService.getUserData;
    }

    ngOnInit() {
        this.consultantsList = ConsultantsList;
        this.getResultData();
    }
    getResultData() {
        this.loading = true;
        this.cardService
            .getUsersCard()
            .then((data: any) => {
                this.loading = false;
                if (data['appointment']) {
                    if (data['appointment'].payment) {
                        this.paymentHasbeenDone = true;
                    }
                    this.appointmentData = data['appointment'];
                    const consultant = this.consultantsList.filter((consultant: any) => consultant.id === this.appointmentData.consultantId);
                    if (!consultant.length) {
                        this.openSnackBar('Something went wrong, can you please re-appoint any consultant', '');
                        return;
                    } else {
                        this.selectedConsultant = consultant[0];
                    }
                } else {
                    window.location.href = '/results';
                }
            })
            .catch((err) => {
                this.loading = false;
            });
    }

    optionClicked(paymentName: string) {
        this.loading = true;
        this.clickedOption = paymentName;

        this.cardService.createAppointment('appointment', {
            consultantId: this.appointmentData.consultantId,
            dateTime: this.appointmentData.dateTime,
            payment: true
        });

        setTimeout(() => {
            this.paymentClicked = true;
            this.loading = false;
        }, 3000);
    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000
        });
    }
}
