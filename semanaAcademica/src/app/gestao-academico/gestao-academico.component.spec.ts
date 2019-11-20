import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoAcademicoComponent } from './gestao-academico.component';

describe('GestaoAcademicoComponent', () => {
  let component: GestaoAcademicoComponent;
  let fixture: ComponentFixture<GestaoAcademicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestaoAcademicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
