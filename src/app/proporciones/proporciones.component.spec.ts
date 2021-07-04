import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProporcionesComponent } from './proporciones.component';

describe('ProporcionesComponent', () => {
  let component: ProporcionesComponent;
  let fixture: ComponentFixture<ProporcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProporcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProporcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
