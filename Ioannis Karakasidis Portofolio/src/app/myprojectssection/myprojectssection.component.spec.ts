import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprojectssectionComponent } from './myprojectssection.component';

describe('MyprojectssectionComponent', () => {
  let component: MyprojectssectionComponent;
  let fixture: ComponentFixture<MyprojectssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyprojectssectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyprojectssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
