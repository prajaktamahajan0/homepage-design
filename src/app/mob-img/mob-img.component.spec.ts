import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobImgComponent } from './mob-img.component';

describe('MobImgComponent', () => {
  let component: MobImgComponent;
  let fixture: ComponentFixture<MobImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
