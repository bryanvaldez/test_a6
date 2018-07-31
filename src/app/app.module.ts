import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HeaderComponent } from './components/header/header.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
