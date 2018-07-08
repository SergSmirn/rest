import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { CoreComponent } from './core/core.component';

export const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },
    {
        path: '',
        component: CoreComponent
    }
]