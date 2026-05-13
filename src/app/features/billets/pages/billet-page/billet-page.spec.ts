import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilletPage } from './billet-page';

describe('BilletPage', () => {
  let component: BilletPage;
  let fixture: ComponentFixture<BilletPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilletPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
