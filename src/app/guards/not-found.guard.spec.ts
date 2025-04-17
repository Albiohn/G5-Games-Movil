import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { NotFoundGuard } from './not-found.guard';

describe('NotFoundGuard', () => {
  let guard: NotFoundGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [NotFoundGuard]
    });
    guard = TestBed.inject(NotFoundGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should redirect to /not-found and return false', () => {
    const navigateSpy = spyOn(router, 'navigate'); // Spy on router.navigate

    const routeSnapshot = {} as ActivatedRouteSnapshot; // Mock ActivatedRouteSnapshot
    const stateSnapshot = {} as RouterStateSnapshot; // Mock RouterStateSnapshot

    const canActivate = guard.canActivate(routeSnapshot, stateSnapshot);

    expect(canActivate).toBe(false); // Check that canActivate returns false
    expect(navigateSpy).toHaveBeenCalledWith(['/not-found']); // Check that router.navigate was called with ['/not-found']
  });
});
