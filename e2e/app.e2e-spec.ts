import { LearningProjectPage } from './app.po';

describe('learning-project App', () => {
  let page: LearningProjectPage;

  beforeEach(() => {
    page = new LearningProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
