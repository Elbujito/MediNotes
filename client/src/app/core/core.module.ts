import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import {AuthService, PatientsService , BilansService, UserService, AlertService } from './services/index';
import {throwIfAlreadyLoaded, AdminGuard, LoggedGuard, LoggedOffGuard } from './guards/index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
  ],
  providers: [
    AdminGuard,
	LoggedGuard,
	LoggedOffGuard,
	AuthService,
	PatientsService,
	BilansService,
	UserService,
	AlertService
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}