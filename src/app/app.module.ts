import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BurgersComponent } from './burgers/burgers.component';
import { BurgersService } from './services'

import { ApiModule } from './services';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component'; 


@NgModule({
  declarations: [
    AppComponent,
    BurgersComponent,
    BurgerDetailComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [BurgersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
