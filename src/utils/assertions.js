import { ChainablePromiseElement } from 'webdriverio';
import { addLog } from './commands';

class Assertion {
  toContain(actual, expected) {
    expect(actual).toContain(expected);
    addLog(`Assertion >> ${actual} to contain ${expected}`);
  }

  toEqual(actual, expected) {
    expect(actual).toEqual(expected);
    addLog(`Assertion >> ${actual} to equal ${expected}`);
  }

  async toHaveText(element, expectedText) {
    await expect(element).toHaveText(expectedText);
    addLog(
      `Assertion >> ${await element.selector} to have text ${expectedText}`
    );
  }

  async toHaveTextContain(element, expectedText) {
    await expect(element).toHaveTextContaining(expectedText);
    addLog(
      `Assertion >> ${await element.selector} to have text containing ${expectedText}`
    );
  }

  async toBeExisting(element) {
    await expect(element).toBeExisting();
    addLog(`Assertion >> ${await element.selector} is existing`);
  }

  async toBeDisplayed(element) {
    await expect(element).toBeDisplayed();
    addLog(`Assertion >> ${await element.selector} is displayed`);
  }

  async example(element) {
    const sumOfProducts = (
      await Promise.all(
        await productPrices.map(async (productPrice) =>
          parseInt((await productPrice.getText()).split('.')[1].trim())
        )
      )
    ).reduce((acc, price) => acc + price, 0); //0+ 13000 =13000    50000+13000 =
    console.log(sumOfProducts);
  }
}
export default new Assertion();
