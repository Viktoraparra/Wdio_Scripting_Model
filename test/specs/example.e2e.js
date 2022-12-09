const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

// const WDIO_OPTIONS = {
//   port: 9515,
//   path: '/',
//   capabilities: {
//     browserName: 'chrome',
//   },
// };

// let browser;
// const interceptServiceLauncher = WebdriverAjax();

// beforeAll(async () => {
//   browser = await remote(WDIO_OPTIONS);
//   interceptServiceLauncher.before(null, null, browser);
// });

// beforeEach(async () => {
//   interceptServiceLauncher.beforeTest();
// });

// afterAll(async () => {
//   await client.deleteSession();
// });

describe('My Login application', () => {
  xit('should login with valid credentials', async () => {
    await LoginPage.open();

    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      'You logged into a secure area!'
    );
  });
});
