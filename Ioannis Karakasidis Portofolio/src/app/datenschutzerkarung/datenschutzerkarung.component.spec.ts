import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenschutzerkarungComponent } from './datenschutzerkarung.component';

describe('DatenschutzerkarungComponent', () => {
  let component: DatenschutzerkarungComponent;
  let fixture: ComponentFixture<DatenschutzerkarungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatenschutzerkarungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatenschutzerkarungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
