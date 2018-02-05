import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginregComponent } from './loginreg/loginreg.component';
import { RegComponent } from './reg/reg.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component'
import { HomeComponent } from './home/home.component'
import { MainComponent } from './main/main.component'
import { DashComponent } from './dash/dash.component'
import { MydashComponent } from './mydash/mydash.component'



const routes: Routes = [

    {
      path:'', component: DashComponent,
        children:[
                  {path:'loginreg', component: LoginregComponent},
                  {path:'reg', component: RegComponent},
                  {path:'contact', component: ContactComponent},
                  {path: 'convert', component: HomeComponent},
                  {path: 'home', component: MainComponent},
                ]
    },
      {
        path: 'profile', component: ProfileComponent,
          children:[
                  {path:'mydash', component:MydashComponent},
                  {path:'contact', component:ContactComponent},
                  {path:'convert', component:HomeComponent},


          ]
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
