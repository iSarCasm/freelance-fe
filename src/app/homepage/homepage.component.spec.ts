import { TestBed, async } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomepageComponent
      ],
    }).compileComponents();
  }));

  it(`should have as title 'Freelance Bootcamp Homepage!'`, async(() => {
    const fixture = TestBed.createComponent(HomepageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Freelance Bootcamp Homepage!');
  }));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(HomepageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Freelance Bootcamp Homepage!');
  }));
});
