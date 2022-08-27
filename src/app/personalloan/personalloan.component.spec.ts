import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalloanComponent } from './personalloan.component';

describe('PersonalloanComponent', () => {
  let component: PersonalloanComponent;
  let fixture: ComponentFixture<PersonalloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
