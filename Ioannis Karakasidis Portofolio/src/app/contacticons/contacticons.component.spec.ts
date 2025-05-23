import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacticonsComponent } from './contacticons.component';

describe('ContacticonsComponent', () => {
  let component: ContacticonsComponent;
  let fixture: ComponentFixture<ContacticonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContacticonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContacticonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
