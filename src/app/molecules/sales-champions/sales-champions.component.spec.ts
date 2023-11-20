import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesChampionsComponent } from './sales-champions.component';

describe('SalesChampionsComponent', () => {
  let component: SalesChampionsComponent;
  let fixture: ComponentFixture<SalesChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesChampionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
