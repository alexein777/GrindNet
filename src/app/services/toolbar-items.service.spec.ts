import { TestBed } from '@angular/core/testing';

import { ToolbarItemsService } from './toolbar-items.service';

describe('ToolbarItemsService', () => {
  let service: ToolbarItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolbarItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
