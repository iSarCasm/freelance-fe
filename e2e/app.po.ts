import { browser, by, element } from 'protractor';

export class FreelanceFePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('main-app h1')).getText();
  }
}
