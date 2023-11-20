import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowRotationComponent } from './low-rotation.component';

describe('LowRotationComponent', () => {
  let component: LowRotationComponent;
  let fixture: ComponentFixture<LowRotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowRotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
