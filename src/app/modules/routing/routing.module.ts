import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './../../pages/home/home.component';
import { SettingsComponent } from './../../pages/settings/settings.component';

const routes: Routes = [ {
    path: '', redirectTo: '/home', pathMatch: 'full' }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
