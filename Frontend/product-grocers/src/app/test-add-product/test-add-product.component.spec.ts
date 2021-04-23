import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAddProductComponent } from './test-add-product.component';

describe('TestAddProductComponent', () => {
  let component: TestAddProductComponent;
  let fixture: ComponentFixture<TestAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAddProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
