import { PageNotFoundComponent } from './../shared/page-not-found/page-not-found.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { ResultComponent } from './result/result.component';
import { CardDragComponent } from './card-drag/card-drag.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../@core/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'game/:level',
                component: CardDragComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'result',
                component: ResultComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'payment',
                component: PaymentComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'appointment',
                component: AppointmentComponent,
                canActivate: [AuthGuard]
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
