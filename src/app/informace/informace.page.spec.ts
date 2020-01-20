import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacePage } from './informace.page';

describe('InformacePage', () => {
  let component: InformacePage;
  let fixture: ComponentFixture<InformacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
