import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProporcionComponent } from './proporcion.component';

describe('ProporcionComponent', () => {
  let component: ProporcionComponent;
  let fixture: ComponentFixture<ProporcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProporcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProporcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
