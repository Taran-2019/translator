import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { TRANSLATIONS } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from '../app/translate.service';
import { FormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
