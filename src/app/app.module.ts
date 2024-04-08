import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoyerComponent } from './foyer/foyer/foyer.component';
import { Foyer } from './models/Foyer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowfoyerComponent } from './foyer/showfoyer/showfoyer.component';
import { UpdatefoyerComponent } from './foyer/updatefoyer/updatefoyer.component';

@NgModule({
  declarations: [
    AppComponent,
    FoyerComponent,
    ShowfoyerComponent,
    UpdatefoyerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Foyer],
  bootstrap: [AppComponent]
})
export class AppModule { }
