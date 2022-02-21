import { TestBed } from '@angular/core/testing';

import { HtmlResolverService } from './html-resolver.service';

describe('HtmlResolverService', () => {
  let service: HtmlResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
