import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTransaction } from './detail-transaction';

describe('DetailTransaction', () => {
  let component: DetailTransaction;
  let fixture: ComponentFixture<DetailTransaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailTransaction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTransaction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
