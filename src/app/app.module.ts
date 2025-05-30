import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http'; 
=======

>>>>>>> 6628049099f984222d05a104d2364df0375f568b
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD

=======
import { provideHttpClient } from '@angular/common/http'; 
>>>>>>> 6628049099f984222d05a104d2364df0375f568b

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
