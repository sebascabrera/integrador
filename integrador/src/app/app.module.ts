import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoargprogramaComponent } from './components/logoargprograma/logoargprograma.component';
import { LogoredesComponent } from './components/logoredes/logoredes.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress/lib/ng-circle-progress.module';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
        AppComponent,
    HeaderComponent,
    LogoargprogramaComponent,
    LogoredesComponent,
    HeaderComponent,
    AcercaDeComponent,
    BannerComponent,
    ExperienciaComponent,
    SkillsComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
     }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
