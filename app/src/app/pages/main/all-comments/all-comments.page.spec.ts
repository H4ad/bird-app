import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllCommentsPage } from './all-comments.page';

describe('AllCommentsPage', () => {
  let component: AllCommentsPage;
  let fixture: ComponentFixture<AllCommentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCommentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllCommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
