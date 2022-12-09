describe('Intercetor Test Demo', async () => {
  xit('Should be able to capture search suggestion', async () => {
    await browser.url('https://www.amazon.com/');
    await browser.setupInterceptor();
    await $('#twotabsearchtextbox').setValue('mobile');
    await browser.pause(3000);

    let searchSuggestions = await browser.expectRequest(
      'GET',
      '/api/2017/suggestions',
      200
    );

    console.log('Search suggestion ', searchSuggestions);

    console.log('Search suggestion ', searchSuggestions[2].response.headers);

    console.log('Search suggestion ', searchSuggestions[2].response.body);
  });
});
