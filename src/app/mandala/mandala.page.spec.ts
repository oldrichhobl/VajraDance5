import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MandalaPage } from './mandala.page';

describe('MandalaPage', () => {
  let component: MandalaPage;
  let fixture: ComponentFixture<MandalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandalaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MandalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
