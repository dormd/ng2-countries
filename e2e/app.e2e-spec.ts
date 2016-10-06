import { Ng2CountriesPage } from './app.po';

describe('ng2-countries App', function() {
  let page: Ng2CountriesPage;

  beforeEach(() => {
    page = new Ng2CountriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
