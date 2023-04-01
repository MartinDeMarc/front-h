import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { WalletConnectComponent } from './components/wallet-connect/wallet-connect.component';
import { SinginComponent } from './components/singin/singin.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'signin', component: SinginComponent },
  { path: 'user', component: UserComponent },
  { path: 'wallet', component: WalletConnectComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
