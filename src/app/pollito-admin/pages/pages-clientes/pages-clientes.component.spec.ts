import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesClientesComponent } from './pages-clientes.component';

describe('PagesClientesComponent', () => {
  let component: PagesClientesComponent;
  let fixture: ComponentFixture<PagesClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
