import { TestBed } from '@angular/core/testing';

import { ImageBrowser.Service.TsService } from './image-browser.service.ts.service';

describe('ImageBrowser.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageBrowser.Service.TsService = TestBed.get(ImageBrowser.Service.TsService);
    expect(service).toBeTruthy();
  });
});
