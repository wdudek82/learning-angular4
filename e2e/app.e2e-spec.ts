import { CfeAppPage } from './app.po';

describe('cfe-app App', () => {
  let page: CfeAppPage;

  beforeEach(() => {
    page = new CfeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
