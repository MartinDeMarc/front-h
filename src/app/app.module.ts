import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { WalletConnectComponent } from './components/wallet-connect/wallet-connect.component';
import { SinginComponent } from './components/singin/singin.component';
import { UserComponent } from './components/user/user.component';
import { InputText } from './components/input-text/input-text.component';
import { InputFile } from './components/input-file/input-file.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WalletConnectComponent,
    SinginComponent,
    UserComponent,
    InputText,
    InputFile,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
