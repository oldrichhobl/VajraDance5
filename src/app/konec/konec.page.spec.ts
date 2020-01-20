import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KonecPage } from './konec.page';

describe('KonecPage', () => {
  let component: KonecPage;
  let fixture: ComponentFixture<KonecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonecPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KonecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
