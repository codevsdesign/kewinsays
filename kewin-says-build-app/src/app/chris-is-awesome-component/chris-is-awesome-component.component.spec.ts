/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChrisIsAwesomeComponentComponent } from './chris-is-awesome-component.component';

describe('ChrisIsAwesomeComponentComponent', () => {
  let component: ChrisIsAwesomeComponentComponent;
  let fixture: ComponentFixture<ChrisIsAwesomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChrisIsAwesomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChrisIsAwesomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
