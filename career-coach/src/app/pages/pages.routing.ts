import { PaymentComponent } from './payment/payment.component';
import { ResultComponent } from './result/result.component';
import { CardDragComponent } from './card-drag/card-drag.component';
import { PagesComponent } from './pages.component';
import { ZoomComponent } from './zoom/zoom.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'game',
                component: CardDragComponent
            },
            {
                path: 'result',
                component: ResultComponent
            },
            {
                path: 'payment',
                component: PaymentComponent
            },
            {
                path: 'zoom',
                component: ZoomComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
