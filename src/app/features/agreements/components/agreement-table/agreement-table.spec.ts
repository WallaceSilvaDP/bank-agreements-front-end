import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementTable } from './agreement-table';

describe('AgreementTable', () => {
  let component: AgreementTable;
  let fixture: ComponentFixture<AgreementTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgreementTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreementTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
