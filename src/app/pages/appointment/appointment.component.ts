import { CardService } from './../../@core/services/card.service';
import { PickDateComponent } from './pick-date/pick-date.component';
import { Component, OnInit } from '@angular/core';
import { ConsultantsList } from 'src/app/@core/constants/consultants';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
    consultantsList: any;
    selectedConsultant: any;
    loading = false;
    paymentHasbeenDone = false;
    appointmentData: any;
    appointmentDate: any;
    constructor(protected router: Router, public dialog: MatDialog, private cardService: CardService, private _snackBar: MatSnackBar) {}

    ngOnInit() {
        this.consultantsList = ConsultantsList;
        this.getAppointmentData();
    }

    getAppointmentData() {
        this.loading = false;

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
                        if (data['appointment'].payment) {
                            if (moment().diff(data['appointment'].dateTime, 'seconds') < 0) {
                                this.paymentHasbeenDone = true;
                                this.appointmentDate = moment(data['appointment'].dateTime).fromNow();
                            }
                        }
                        this.appointmentData = data['appointment'];
                        const consultant = this.consultantsList.filter((consultant: any) => consultant.id === this.appointmentData.consultantId);
                        if (!consultant.length) {
                            this.openSnackBar('Something went wrong', '');
                        } else {
                            this.selectedConsultant = consultant[0];
                        }
                    }
                } else {
                    window.location.href = '/u/game/level1';
                }
            })
            .catch((err) => {
                this.loading = false;
            });
    }

    selectConsultant(consultant: any) {
        const dialogRef = this.dialog.open(PickDateComponent, {
            width: '600px',
            data: { consultantId: consultant.id, consultantName: consultant.name }
        });

        dialogRef.afterClosed().subscribe((date) => {
            if (date && date._d) {
                const pickedDate = date._d;
                if (date && moment(date).isValid()) {
                    const date = moment(pickedDate).format('YYYY-MM-DDTHH:mm');
                    this.cardService.createAppointment('appointment', {
                        consultantId: consultant.id,
                        dateTime: date,
                        payment: false
                    });
                    this.router.navigate(['/payment']);
                } else {
                    this.openSnackBar('You need to select date and time for an appointment', '');
                }
            }
        });
    }
    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000
        });
    }
}
