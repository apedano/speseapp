import { SpeseappPage } from './app.po';

describe('speseapp App', () => {
  let page: SpeseappPage;

  beforeEach(() => {
    page = new SpeseappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
