import { browser, element, by } from 'protractor';

describe('@lngx/platform-identifier E2E Tests', function () {

  beforeEach(() => browser.get(''));

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  it('should display the browser platform', () => {
    expect(element(by.css('.browser')).getText()).toMatch(/.+/);
  });

  it('should display the engine platform', () => {
    expect(element(by.css('.engine')).getText()).toMatch(/.+/);
  });

  it('should display the OS platform', () => {
    expect(element(by.css('.os')).getText()).toMatch(/.+/);
  });

});
