import { TestBed } from '@angular/core/testing';

import { ShowRoutesByRolesService } from './show-routes-by-roles.service';

describe('ShowRoutesByRolesService', () => {
  let service: ShowRoutesByRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowRoutesByRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
