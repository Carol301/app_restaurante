import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PratodiaPage } from './pratodia.page';

describe('PratodiaPage', () => {
  let component: PratodiaPage;
  let fixture: ComponentFixture<PratodiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratodiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PratodiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
