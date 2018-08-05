import { AppPage } from './app.po';

describe('School App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to School!!!');
  });

  it('should display the total number of classes section', () => {
    expect(page.getClasses().getText()).toContain('Total Classes in the school');
  });

  it('should display two category buttons', () => {
    expect(page.getClassesItems().count()).toEqual(2);
  });
});
