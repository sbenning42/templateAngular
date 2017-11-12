import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from './modules/routing/routing.module';
import { MaterialLoaderModule } from './modules/material-loader/material-loader.module';

import { HttpService } from './services/http.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { SettingsComponent } from './pages/settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigatorComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    RoutingModule,
    MaterialLoaderModule,
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
