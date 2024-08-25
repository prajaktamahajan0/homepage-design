import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsImgComponent } from './girls-img.component';

describe('GirlsImgComponent', () => {
  let component: GirlsImgComponent;
  let fixture: ComponentFixture<GirlsImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GirlsImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GirlsImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
