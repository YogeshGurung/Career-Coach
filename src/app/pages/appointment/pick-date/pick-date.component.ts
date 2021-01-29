import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
@Component({
    selector: 'app-pick-date',
    templateUrl: './pick-date.component.html',
    styleUrls: ['./pick-date.component.scss']
})
export class PickDateComponent implements OnInit {
    @ViewChild('picker') picker: any;
    consultantId: number;
    consultantName: string;
    pickedDate: any;
    public showSpinners = true;
    today = new Date();
    public minDate = new Date(this.today);
    public dateControl = moment().add(1, 'days');
    constructor(public dialogRef: MatDialogRef<PickDateComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.minDate.setDate(this.minDate.getDate() + 1);
        this.consultantId = data.consultantId;
        this.consultantName = data.consultantName;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {}
}
