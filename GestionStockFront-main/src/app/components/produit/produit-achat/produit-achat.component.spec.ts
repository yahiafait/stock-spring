import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitAchatComponent } from './produit-achat.component';

describe('ProduitAchatComponent', () => {
  let component: ProduitAchatComponent;
  let fixture: ComponentFixture<ProduitAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitAchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
