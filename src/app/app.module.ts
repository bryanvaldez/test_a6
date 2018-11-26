import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HeaderComponent } from './components/shared/header/header.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListComponent } from './components/list/list.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

// Routes
import { FeatureRoutingModule } from './app.routes';

// Services
import { PadronService } from './services/padron.service';
import { SearchComponent } from './components/search/search.component';
import { ItemComponent } from './components/item/item.component';
import { CardsComponent } from './components/cards/cards.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistroComponent,
    ListComponent,
    AboutComponent,
    HomeComponent,
    SearchComponent,
    ItemComponent,
    CardsComponent,
    PipesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FeatureRoutingModule
  ],
  providers: [
    PadronService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
