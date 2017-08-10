import { TestAprill33Page } from './app.po';

describe('test-aprill33 App', () => {
  let page: TestAprill33Page;

  beforeEach(() => {
    page = new TestAprill33Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
