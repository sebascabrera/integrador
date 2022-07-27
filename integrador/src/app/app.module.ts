import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoargprogramaComponent } from './components/logoargprograma/logoargprograma.component';
import { LogoredesComponent } from './components/logoredes/logoredes.component';
<<<<<<< HEAD
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
=======
import { BannerComponent } from './components/banner/banner.component';
>>>>>>> develop

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoargprogramaComponent,
    LogoredesComponent,
<<<<<<< HEAD
    AcercaDeComponent
=======
    BannerComponent
>>>>>>> develop
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
