import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaesPainelComponent } from './caes-painel.component';

describe('CaesPainelComponent', () => {
  let component: CaesPainelComponent;
  let fixture: ComponentFixture<CaesPainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaesPainelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaesPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
