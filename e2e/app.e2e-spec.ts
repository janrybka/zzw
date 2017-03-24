import { ZzwPage } from './app.po';

describe('zzw App', function() {
  let page: ZzwPage;

  beforeEach(() => {
    page = new ZzwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
