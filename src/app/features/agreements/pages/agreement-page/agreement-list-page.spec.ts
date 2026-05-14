import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementListPage } from './agreement-list-page';

describe('AgreementListPage', () => {
  let component: AgreementListPage;
  let fixture: ComponentFixture<AgreementListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgreementListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreementListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
