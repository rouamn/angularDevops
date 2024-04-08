import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefoyerComponent } from './updatefoyer.component';

describe('UpdatefoyerComponent', () => {
  let component: UpdatefoyerComponent;
  let fixture: ComponentFixture<UpdatefoyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatefoyerComponent]
    });
    fixture = TestBed.createComponent(UpdatefoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
