import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleContactFormComponent } from './sale-contact-form.component';

describe('SaleContactFormComponent', () => {
  let component: SaleContactFormComponent;
  let fixture: ComponentFixture<SaleContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaleContactFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
