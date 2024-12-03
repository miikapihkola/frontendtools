import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { map, take, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService)
  const router = inject(Router)

  return authService.getLoggedInUser().pipe(
    take(1),
    map(authState => Boolean(authState)),
    tap(auth => !auth ? router.navigate(['login']) : true)
  )
};
