import { LandingComponent } from './landing/landing.component';
import { async } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'u',
        loadChildren: async () => (await import('./pages/pages.module')).PagesModule
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
