import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementCreateDialog } from './agreement-create-dialog';

describe('AgreementCreateDialog', () => {
  let component: AgreementCreateDialog;
  let fixture: ComponentFixture<AgreementCreateDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgreementCreateDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreementCreateDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
