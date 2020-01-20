import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NastavPage } from './nastav.page';

describe('NastavPage', () => {
  let component: NastavPage;
  let fixture: ComponentFixture<NastavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NastavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
