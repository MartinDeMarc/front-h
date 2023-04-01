import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { WalletConnectComponent } from './components/wallet-connect/wallet-connect.component';
import { SinginComponent } from './components/singin/singin.component';
import { UserComponent } from './components/user/user.component';
import { Accordion } from './components/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WalletConnectComponent,
    SinginComponent,
    UserComponent,
    Accordion,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
