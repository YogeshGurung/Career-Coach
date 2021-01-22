import { SettingComponent, SettingDialogComponent } from './setting/setting.component';
import { AngularMaterialImportModule } from './../@core/import/angular-material.import';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const SHARED_COMPONENTS = [HeaderComponent, SettingComponent, SettingDialogComponent];
@NgModule({
    declarations: [...SHARED_COMPONENTS],
    imports: [CommonModule, AngularMaterialImportModule],
    providers: [],
    exports: [...SHARED_COMPONENTS]
})
export class SharedModule {}
