import { PickDateComponent } from './appointment/pick-date/pick-date.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ResultComponent } from './result/result.component';
import { CardDragComponent } from './card-drag/card-drag.component';
import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { AngularMaterialImportModule } from './../@core/import/angular-material.import';
@NgModule({
    imports: [CommonModule, PagesRoutingModule, AngularMaterialImportModule],
    declarations: [PagesComponent, CardDragComponent, ResultComponent, CardComponent, PaymentComponent, ProfileComponent, AppointmentComponent, PickDateComponent]
})
export class PagesModule {}
