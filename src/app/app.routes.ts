import { Routes } from '@angular/router';

// import { LayoutComponent } from '../layout/layout.component';
import { ERoute } from '../utils/enum/route.enum';

export const MAIN_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: `/${ERoute.AUTH}` },
    {
        path: ERoute.AUTH,
        loadComponent: () =>
            import('./auth/auth.component').then((c) => c.AuthComponent),
    },
    // {
    //     path: ERoute.LAYOUT,
    //     component: LayoutComponent,
    //     canActivate: [AuthGuard],
    //     loadChildren: () =>
    //         import('./layout/layout.routes').then((c) => c.LAYOUT_ROUTES),
    // },
    // { path: '**', pathMatch: 'full', redirectTo: `/${ERoute.AUTH}` },
];
