import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTable } from './contract-table';

describe('ContractTable', () => {
  let component: ContractTable;
  let fixture: ComponentFixture<ContractTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
