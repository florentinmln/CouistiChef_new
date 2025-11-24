import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevenueModificationPage } from './revenue-modification.page';

describe('RevenueModificationPage', () => {
  let component: RevenueModificationPage;
  let fixture: ComponentFixture<RevenueModificationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueModificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
