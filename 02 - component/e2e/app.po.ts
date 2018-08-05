import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getClasses() {
    return element(by.css('.classes'));
  }

  getClassesItems() {
    return element.all(by.css('.classes__item'));
  }

}
