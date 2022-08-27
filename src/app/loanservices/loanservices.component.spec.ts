import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanservicesComponent } from './loanservices.component';

describe('LoanservicesComponent', () => {
  let component: LoanservicesComponent;
  let fixture: ComponentFixture<LoanservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
