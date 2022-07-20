import { TestBed } from '@angular/core/testing';
import { ErrorEqualsPipe } from './error-equals.pipe';
import { EdaError } from './error.component';
import { ErrorMsgPipe } from './error.msg.pipe';

describe('EdaError', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaError, ErrorEqualsPipe, ErrorMsgPipe],
    }).compileComponents();
  });

  it('should create the eda-error component', () => {
    const fixture = TestBed.createComponent(EdaError);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
