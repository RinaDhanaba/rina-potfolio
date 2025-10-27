import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyModalComponent } from './case-study-modal.component';

describe('CaseStudyModalComponent', () => {
  let component: CaseStudyModalComponent;
  let fixture: ComponentFixture<CaseStudyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseStudyModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
