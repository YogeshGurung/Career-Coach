import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})
export class SettingComponent {
    constructor(public dialog: MatDialog) {}

    openDialog() {
        const dialogRef = this.dialog.open(SettingDialogComponent);

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}

@Component({
    selector: 'setting-dialog',
    templateUrl: 'setting-dialog.component.html'
})
export class SettingDialogComponent {
    check() {
        console.log('Clicked');
    }
}
