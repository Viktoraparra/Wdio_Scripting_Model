import {
  ChainablePromiseArray,
  ChainablePromiseElement,
  ElementArray,
} from 'webdriverio';
import report from '@wdio/allure-reporter';

export const addLog = (log) => {
  report.addStep(`STEP: ${log}`);
  console.log(`STEP: ${log}`);
};

export const selectDropdown = async (elements, value) => {
  for (let i = 0; i < (await elements).length; i++) {
    const elem = await elements[i].getAttribute('value');
    if (elem === value) {
      await elements[i].click();
      addLog(`Selected dropdown value: ${value}`);
      break;
    }
  }
};

export const setText = async (element, text) => {
  await element.setValue(text);
  addLog(`Entered value: ${text}`);
};

export const selectVisibleText = async (elem, text) => {
  await elem.selectByVisibleText(text);
  addLog(`Selected by visible text: ${text}`);
};

export const click = async (elem) => {
  await elem.click();
  addLog(`Clicked on element: ${await elem.selector}`);
};
