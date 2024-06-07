import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBgComponent } from './button-bg.component';

describe('ButtonBgComponent', () => {
  let component: ButtonBgComponent;
  let fixture: ComponentFixture<ButtonBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
