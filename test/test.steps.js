var angularHomepage = require('./test.page.js');

var steps = function() {

  this.Given(/^I am on the homepage$/, function() {
    browser.get('http://otwn.nl/');
//    var angularHomepage = new AngularHomepage();
//    AngularHomepage.get();
  });


  this.When(/^I fill in "([^"]*)"$/, function(callback) {
    element(by.model('yourName')).sendKeys('Soeradj');
      setTimeout(callback, 10000);
      });

  this.Then(/^I should see "([^"]*)"$/, function(callback) {
    element(by.binding('yourName')).getText('Hello Soeradj!')
//      expect(angularHomepage.getGreeting()).toEqual('Hello Soeradj!');
      result.should.equal(true);
      setTimeout(callback, 1000);
    });
};

module.exports = steps;