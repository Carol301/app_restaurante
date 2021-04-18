import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SobremesaPage } from './sobremesa.page';

describe('SobremesaPage', () => {
  let component: SobremesaPage;
  let fixture: ComponentFixture<SobremesaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobremesaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SobremesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
