import { BlurAdminPage } from './app.po';

describe('blur-admin App', function() {
  let page: BlurAdminPage;

  beforeEach(() => {
    page = new BlurAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
