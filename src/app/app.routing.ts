import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './@core/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'u',
        loadChildren: async () => (await import('./pages/pages.module')).PagesModule,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
