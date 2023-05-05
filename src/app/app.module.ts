import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './state';
import { NgEntityService } from "@datorama/akita-ng-entity-service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AkitaNgDevtools.forRoot(),
  ],
  providers: [TodoService, NgEntityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
