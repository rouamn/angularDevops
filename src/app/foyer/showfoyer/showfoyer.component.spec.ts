import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfoyerComponent } from './showfoyer.component';

describe('ShowfoyerComponent', () => {
  let component: ShowfoyerComponent;
  let fixture: ComponentFixture<ShowfoyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowfoyerComponent]
    });
    fixture = TestBed.createComponent(ShowfoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
