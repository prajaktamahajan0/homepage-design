import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundcardComponent } from './backgroundcard.component';

describe('BackgroundcardComponent', () => {
  let component: BackgroundcardComponent;
  let fixture: ComponentFixture<BackgroundcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
