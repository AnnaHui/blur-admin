import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { NgUploaderModule } from 'ngx-uploader';

import {
    PageTopComponent,
} from "./components"


const THEME_COMPONENTS = [
    PageTopComponent
]

@NgModule({
    declarations: [
        ...THEME_COMPONENTS
    ],
    exports: [
        ...THEME_COMPONENTS
    ]
})

export class ThemeModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: ThemeModule,
        }
    }
}