import { ProjectsPage } from './app.po';

describe('projects App', function() {
  let page: ProjectsPage;

  beforeEach(() => {
    page = new ProjectsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
