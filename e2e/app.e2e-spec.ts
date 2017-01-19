import { Angular2CliBootsrapMaterialStarterPage } from './app.po';

describe('angular2-cli-bootsrap-material-starter App', function() {
  let page: Angular2CliBootsrapMaterialStarterPage;

  beforeEach(() => {
    page = new Angular2CliBootsrapMaterialStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
