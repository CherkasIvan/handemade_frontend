import { providePrimeNG } from 'primeng/config';

import {
    ApplicationConfig,
    importProvidersFrom,
    provideZoneChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PreloadAllModules, RouterModule } from '@angular/router';

import Aura from '@primeng/themes/aura';

import { MAIN_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura,
            },
        }),

        importProvidersFrom([
            BrowserModule,
            RouterModule.forRoot(MAIN_ROUTES, {
                preloadingStrategy: PreloadAllModules,
            }),
        ]),
    ],
};
