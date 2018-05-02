describe('the test', function () {
  it('should run', function () {
    browser.url('http://www.gooogle.com');

    var title = browser.getTitle();
    browser.debug();
    console.log(title);
  });
});