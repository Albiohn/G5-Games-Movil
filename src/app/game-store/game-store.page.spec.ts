import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameStorePage } from './game-store.page';

describe('GameStorePage', () => {
  let component: GameStorePage;
  let fixture: ComponentFixture<GameStorePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
