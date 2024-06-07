import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBgComponent } from './card-bg.component';

describe('CardBgComponent', () => {
  let component: CardBgComponent;
  let fixture: ComponentFixture<CardBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
