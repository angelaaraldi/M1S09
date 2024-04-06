import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DietComponent } from './diet/diet.component';
import { DietDetailComponent } from './diet-detail/diet-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './shared/shared/guardas/auth.guard';
import { authIdGuard } from './shared/shared/guardas/auth-id.guard';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "home",
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: "cadastro",
        component: CadastroComponent
    },
    {
        path: "diet",
        canActivate: [authGuard],
        canActivateChild: [authIdGuard],
        loadChildren:
            () => import('./diet/diet.module').then(m => m.DietModule)
    },
    {
        path: "profile",
        component: ProfileComponent,
        canActivate: [authGuard]
    }
];
