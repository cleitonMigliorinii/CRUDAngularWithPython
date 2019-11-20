

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GestaoAcademicoComponent } from './gestao-academico/gestao-academico.component';
import { HttpService } from './http.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GestaoAcademicoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService, {provide: LocationStrategy, useClass: HashLocationStrategy},  { provide: LOCALE_ID, useValue: 'pt-PT' }],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
