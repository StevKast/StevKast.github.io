import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAccessComponent } from './server-access.component';

describe('ServerAccessComponent', () => {
  let component: ServerAccessComponent;
  let fixture: ComponentFixture<ServerAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
