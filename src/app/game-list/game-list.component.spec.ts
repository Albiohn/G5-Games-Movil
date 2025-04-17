import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GameListComponent } from './game-list.component';
import { RawgService } from '../services/rawg.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;
  let rawgServiceSpy: jasmine.SpyObj<RawgService>;

  const mockGames = [
    {
      name: 'Game 1',
      released: '2023-01-01',
      background_image: 'image1.jpg',
      genres: [{ name: 'Action' }],
      platforms: [{ platform: { name: 'PC' } }]
    },
    {
      name: 'Game 2',
      released: '2023-02-01',
      background_image: 'image2.jpg',
      genres: [{ name: 'Adventure' }],
      platforms: [{ platform: { name: 'PS4' } }]
    }
  ];

  beforeEach(waitForAsync(() => {
    const spy = jasmine.createSpyObj('RawgService', ['getFirstPageOfGames', 'getGames']);

    TestBed.configureTestingModule({
      declarations: [ GameListComponent ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: RawgService, useValue: spy }
      ]
    }).compileComponents();

    rawgServiceSpy = TestBed.inject(RawgService) as jasmine.SpyObj<RawgService>;
    rawgServiceSpy.getFirstPageOfGames.and.returnValue(of({ results: mockGames, count: 80 }));

    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  fit('should create', () => { // Use 'fit' to focus on this specific test
    expect(component).toBeTruthy();
  });

  it('should display a list of games', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.game-card').length).toBe(2);
    expect(compiled.querySelector('.game-card ion-card-title').textContent).toContain('Game 1');
  });

  it('should display "No hay juegos disponibles en este momento." when no games are available', () => {
    rawgServiceSpy.getFirstPageOfGames.and.returnValue(of({ results: [], count: 0 }));
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.no-data').textContent).toContain('No hay juegos disponibles en este momento.');
  });

  it('should navigate to the next page of games', () => {
    component.nextPage();
    expect(component.currentPage).toBe(2);
  });

  it('should navigate to the previous page of games', () => {
    component.currentPage = 2;
    component.previousPage();
    expect(component.currentPage).toBe(1);
  });

  it('should get genres as a comma-separated string', () => {
    const game = mockGames[0];
    const genres = component.getGenres(game);
    expect(genres).toBe('Action');
  });

  it('should get platforms as a comma-separated string', () => {
    const game = mockGames[0];
    const platforms = component.getPlatforms(game);
    expect(platforms).toBe('PC');
  });
});
