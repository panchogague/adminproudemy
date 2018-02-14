import{Routes,RouterModule} from '@angular/router'
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { LoginComponent } from 'app/login/login.component';
import { ProgressComponent } from 'app/pages/progress/progress.component';
import { Graficas1Component } from 'app/pages/graficas1/graficas1.component';
import { NopagefoundComponent } from 'app/shared/nopagefound/nopagefound.component';
import { PagesComponent } from 'app/pages/pages.component';
import { RegisterComponent } from 'app/login/register.component';
const appRoutes:Routes =[
    {path:'', component:PagesComponent,
     children:[
        {path:'dasboard', component:DashboardComponent},
        {path:'progress', component:ProgressComponent},
        {path:'graficas1', component:Graficas1Component},
        {path:'', redirectTo:'/dasboard',pathMatch:'full'}, 
     ]},
     {path:'login', component:LoginComponent},
     {path:'register', component:RegisterComponent},
     {path:'**', component:NopagefoundComponent},
];
export const APP_ROUTES=RouterModule.forRoot(appRoutes,{useHash:true});