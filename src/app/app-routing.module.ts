import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';
import { ThemesComponent } from './pages/themes/themes.component';

const routes: Routes = [
  {
    path:"",
    redirectTo: "/login",
    pathMatch:"full"
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path:"register",
    component: RegisterComponent,
  },
  {
    path:"dashboard",
    component: DashboardComponent,
  },
  {
    path:"subscription",
    component: SubscriptionsComponent,
  },
  {
    path:"theme",
    component: ThemesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
