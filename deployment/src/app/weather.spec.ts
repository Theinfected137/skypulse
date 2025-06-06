import { TestBed } from '@angular/core/testing';

import { App } from './app';

describe('Weather', () => {
  let service: App;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
