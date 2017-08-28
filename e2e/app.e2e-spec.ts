import { LacmusPage } from './app.po';

describe('lacmus App', () => {
  let page: LacmusPage;

  beforeEach(() => {
    page = new LacmusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
