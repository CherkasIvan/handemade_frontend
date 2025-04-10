import { ButtonModule } from 'primeng/button';

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DestroyService } from '../../core/service/destroy.service';

@Component({
    selector: 'app-auth',
    imports: [ButtonModule],
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
    providers: [DestroyService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {}
