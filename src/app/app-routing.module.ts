import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { UserAgreementComponent } from './screens/user-agreement/user-agreement.component';


const routes: Routes = [
  { path: 'user_agreement', component: UserAgreementComponent },
  { path: 'purchase', component: HomeComponent },
  { path: 'bind', component: HomeComponent },
  { path: 'dashboard', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/user_agreement' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
