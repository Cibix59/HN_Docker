import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTransactions } from './liste-transactions';

describe('ListeTransactions', () => {
  let component: ListeTransactions;
  let fixture: ComponentFixture<ListeTransactions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeTransactions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeTransactions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
