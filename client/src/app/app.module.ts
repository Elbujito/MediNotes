import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, FormControl, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NavbarComponent} from './components/navbar/navbar.component';

import {CoreModule} from './core/core.module';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {AppComponent} from './app.component';
import {CoreComponent} from './core/core.component';

import {PatientsService} from './services/patients.service';

import {ROUTES} from './app.routes';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AboutComponent} from './components/about/about.component';
import {SupportComponent} from './components/support/support.component';
import {FooterComponent} from './components/footer/footer.component'

import {EventsService} from "./services/events.service";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpModule,
    CoreModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PatientsService,
    EventsService
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
    AboutComponent,
    SupportComponent,
    NavbarComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
}
