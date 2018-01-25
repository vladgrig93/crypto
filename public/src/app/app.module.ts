import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {DataService} from './data.service';
import { MaterializeModule } from 'angular2-materialize';
import {RouterModule} from '@angular/router'
import { AngularFontAwesomeModule } from 'angular-font-awesome';



import { AppRoutingModule } from './app-routing.module';
 
import { AppComponent } from './app.component';
import { KeysPipe } from './keys.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginregComponent } from './loginreg/loginreg.component';
import { RegComponent } from './reg/reg.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { DashComponent } from './dash/dash.component';
import { MydashComponent } from './mydash/mydash.component';

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    LoginregComponent,
    RegComponent,
    ContactComponent,
    ProfileComponent,
    HomeComponent,
    MainComponent,
    DashComponent,
    MydashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MaterializeModule,
    BrowserAnimationsModule ,
    RouterModule,
    AngularFontAwesomeModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
