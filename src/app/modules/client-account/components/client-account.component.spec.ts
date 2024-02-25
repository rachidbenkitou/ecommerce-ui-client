import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAccountComponent } from './client-account.component';

describe('ClientAccountComponent', () => {
  let component: ClientAccountComponent;
  let fixture: ComponentFixture<ClientAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
