import { TestBed } from '@angular/core/testing';

import { WidgetsListService } from './widgets-list.service';

describe('WidgetsListService', () => {
  let service: WidgetsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
