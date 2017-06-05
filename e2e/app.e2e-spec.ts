import { Tplabo4pizzeriaPage } from './app.po';

describe('tplabo4pizzeria App', () => {
  let page: Tplabo4pizzeriaPage;

  beforeEach(() => {
    page = new Tplabo4pizzeriaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
