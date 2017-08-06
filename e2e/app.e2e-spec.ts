import { DailyTvShowsPage } from './app.po';

describe('daily-tv-shows App', () => {
  let page: DailyTvShowsPage;

  beforeEach(() => {
    page = new DailyTvShowsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
