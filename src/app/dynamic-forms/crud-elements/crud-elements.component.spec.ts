import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudElementsComponent } from './crud-elements.component';

describe('CrudElementsComponent', () => {
  let component: CrudElementsComponent;
  let fixture: ComponentFixture<CrudElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
