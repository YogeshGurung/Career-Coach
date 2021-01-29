import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { CardService } from './@core/services/card.service';
import { AuthService } from './@core/services/auth.service';
import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseImportModule } from './@core/import/firebase.import';
import { AngularMaterialImportModule } from './@core/import/angular-material.import';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
    declarations: [AppComponent, LandingComponent, PageNotFoundComponent],
    imports: [BrowserModule, AppRoutingModule, AngularMaterialImportModule, FirebaseImportModule, BrowserAnimationsModule, SharedModule, PagesModule],
    providers: [AuthService, CardService],
    bootstrap: [AppComponent]
})
export class AppModule {}
