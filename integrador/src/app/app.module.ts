import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoargprogramaComponent } from './components/logoargprograma/logoargprograma.component';
import { LogoredesComponent } from './components/logoredes/logoredes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoargprogramaComponent,
    LogoredesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
