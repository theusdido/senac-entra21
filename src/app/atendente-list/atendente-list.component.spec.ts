import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendenteListComponent } from './atendente-list.component';

describe('AtendenteListComponent', () => {
  let component: AtendenteListComponent;
  let fixture: ComponentFixture<AtendenteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtendenteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendenteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
