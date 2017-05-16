import { FreelanceFePage } from './app.po';

describe('freelance-fe App', () => {
  let page: FreelanceFePage;

  beforeEach(() => {
    page = new FreelanceFePage();
  });

  it('should display message saying "Freelance Bootcamp Homepage!"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Freelance Bootcamp Homepage!');
  });
});
