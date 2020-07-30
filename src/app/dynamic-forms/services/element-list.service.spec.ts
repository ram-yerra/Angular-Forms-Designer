import { TestBed } from '@angular/core/testing';

import { ElementListService } from './element-list.service';

describe('ElementListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementListService = TestBed.get(ElementListService);
    expect(service).toBeTruthy();
  });
});
