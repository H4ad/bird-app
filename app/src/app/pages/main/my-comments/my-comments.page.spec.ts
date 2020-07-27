import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCommentsPage } from './my-comments.page';

describe('MyCommentsPage', () => {
  let component: MyCommentsPage;
  let fixture: ComponentFixture<MyCommentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCommentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
