import { TestBed } from '@angular/core/testing';

import { ExamSvService } from './exam-sv.service';

describe('ExamSvService', () => {
  let service: ExamSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
