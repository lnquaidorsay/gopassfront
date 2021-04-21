import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppStickyModule } from './app-sticky.module';
import { AppMaterialModule } from './app-material.module';
import { VoyagenatComponent } from './components/voyagenat/voyagenat.component';
import { VoyageinternatComponent } from './components/voyageinternat/voyageinternat.component';
import { ContactComponent } from './components/contact/contact.component';
import { IdentiteComponent } from './components/identite/identite.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TemoinComponent } from './components/temoin/temoin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CompteComponent } from './components/compte/compte.component';
import { MomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    VoyagenatComponent,
    VoyageinternatComponent,
    ContactComponent,
    IdentiteComponent,
    PagenotfoundComponent,
    TemoinComponent,
    CompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppStickyModule,
    MomentDateModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
