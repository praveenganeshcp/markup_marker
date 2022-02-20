import { TestBed } from '@angular/core/testing';

import { WidgetResolverService } from './widget-resolver.service';

describe('WidgetResolverService', () => {
  let service: WidgetResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
