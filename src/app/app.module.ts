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
    declarations: [AppComponent, LandingComponent],
    imports: [BrowserModule, AppRoutingModule, AngularMaterialImportModule, FirebaseImportModule, BrowserAnimationsModule, SharedModule, PagesModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
