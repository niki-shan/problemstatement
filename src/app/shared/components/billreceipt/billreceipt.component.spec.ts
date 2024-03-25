import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillreceiptComponent } from './billreceipt.component';

describe('BillreceiptComponent', () => {
  let component: BillreceiptComponent;
  let fixture: ComponentFixture<BillreceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillreceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
