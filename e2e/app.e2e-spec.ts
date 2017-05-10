import { DiveJournalPage } from './app.po';

describe('dive-journal App', () => {
  let page: DiveJournalPage;

  beforeEach(() => {
    page = new DiveJournalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
