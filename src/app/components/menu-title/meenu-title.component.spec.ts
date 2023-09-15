import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeenuTitleComponent } from './meenu-title.component';

describe('MeenuTitleComponent', () => {
  let component: MeenuTitleComponent;
  let fixture: ComponentFixture<MeenuTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeenuTitleComponent]
    });
    fixture = TestBed.createComponent(MeenuTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
