import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateCommentPage } from './create-comment.page';

describe('CreateCommentPage', () => {
  let component: CreateCommentPage;
  let fixture: ComponentFixture<CreateCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCommentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
