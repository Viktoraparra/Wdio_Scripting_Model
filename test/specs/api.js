// 'use strict';
const supertest = require('supertest');
const expectchai = require('chai').expect;
// const request = require('supertest');
// const assert = require('assert');
// const express = require('express');

const app = 'https://reqres.in';
const endpoint = '/api/users/2';
const service = '/api/users';
const request = supertest(app);
let response = supertest.Response;
const payload = {
  name: 'Victor Parra',
  job: 'QA Engineer',
};
describe('API Automation using SuperTest', async () => {
  xit('Get method Execution', async () => {
    await browser.url('https://reqres.in');
    const single = await $("//li[@data-id='users-single']");
    single.scrollIntoView();
    single.click();
    await browser.pause(3000);
    const ui_responseCode = await $('.response-code').getText();
    let ui_response = JSON.parse(
      await $("pre[data-key='output-response']").getText()
    );
    // console.log(ui_responseCode);

    // console.log(typeof ui_response);
    // const ui_response = await $("pre[data-key='output-response']").getText();
    // console.log(ui_response);
    //console.log(request);

    response = await request.get(endpoint);
    // console.log('API Response call:', response.body);
    // api_response = response.body;
    // console.log(typeof api_response);

    // api_statusCode = response.status;
    // console.log(api_statusCode);

    await expect(ui_responseCode).toContain(response.statusCode.toString());
    await expect(ui_response).toEqual(response.body);
  });

  it('Post Method execution', async () => {
    // await browser.url('https://resttesttest.com/');
    // const addParam = await $('#addprambutton');
    // const methodBtn = await $('#httpmethod');
    // const urlField = await $('#urlvalue');
    // let methods = await $$('#httpmethod option');
    // const firtsParam = await $(
    //   "//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value]"
    // );
    // const input1param = await $(
    //   "//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value]"
    // );
    // const secondParam = await $(
    //   "(//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value])[2]"
    // );
    // const input2param = await $(
    //   "(//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value])[2]"
    // );
    // const ajaxbtn = await $('#submitajax');

    // methodBtn.click();

    // for (let i = 0; i < (await methods).length; i++) {
    //   const elem = await methods[i].getAttribute('value');
    //   if (elem === 'POST') {
    //     await elements[i].click();
    //     break;
    //   }
    // }
    // await urlField.setValue(app + service);
    // await addParam.click();
    // await firtsParam.setValue('name');
    // browser.pause(2000);
    // await input1param.setValue(payload.name);
    // await secondParam.setValue('job');
    // browser.pause(2000);
    // await input2param.setValue(payload.job);
    // await ajaxbtn.click();

    return (response = await request
      .post(service)
      .send(payload)
      .set('content-type', 'application/json')
      .expect(response.status)
      .toEqual(201)
      .expect(response.body.name)
      .toEqual('Victor Parra'));

    // const ui_status = await $('#statuspre').getText();
    // const ui_response = JSON.parse(await $('#outputpre').getText());

    expectchai(ui_response.data.email).to.be.eql(response.body.data.email);
  });
});
