import { TestBed, inject } from '@angular/core/testing';

import { MyNewServiceService } from './my-new-service.service';

describe('MyNewServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyNewServiceService]
    });
  });

  it('should ...', inject([MyNewServiceService], (service: MyNewServiceService) => {
    expect(service).toBeTruthy();
  }));
});
