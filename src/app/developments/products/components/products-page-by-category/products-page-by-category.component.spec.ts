import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPageByCategoryComponent } from './products-page-by-category.component';

describe('ProductsPageByCategoryComponent', () => {
  let component: ProductsPageByCategoryComponent;
  let fixture: ComponentFixture<ProductsPageByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsPageByCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsPageByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
