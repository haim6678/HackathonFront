import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContractHistoryComponent } from './user-contract-history.component';

describe('UserContractHistoryComponent', () => {
  let component: UserContractHistoryComponent;
  let fixture: ComponentFixture<UserContractHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContractHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContractHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
