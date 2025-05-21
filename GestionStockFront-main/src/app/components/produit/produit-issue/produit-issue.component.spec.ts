import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitIssueComponent } from './produit-issue.component';

describe('ProduitIssueComponent', () => {
  let component: ProduitIssueComponent;
  let fixture: ComponentFixture<ProduitIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
