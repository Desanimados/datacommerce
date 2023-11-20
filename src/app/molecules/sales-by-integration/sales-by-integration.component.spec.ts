import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByIntegrationComponent } from './sales-by-integration.component';

describe('SalesByIntegrationComponent', () => {
  let component: SalesByIntegrationComponent;
  let fixture: ComponentFixture<SalesByIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesByIntegrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesByIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
