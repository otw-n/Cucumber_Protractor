var angularHomepage = require('./test.page.js');

var steps = function() {

  this.Given(/^I am on the homepage$/, function(callback) {
    var angularHomepage = new AngularHomepage();
    angularHomepage.get();
  });

  this.When(/^I fill in "([^"]*)"$/, function(callback) {
    angularHomepage.setName('Soeradj');
      setTimeout(callback, 1000);
      });

  this.Then(/^I should see "([^"]*)"$/, function(callback) {
    expect(angularHomepage.getGreeting()).toEqual('Hello Soeradj!');
      result.should.equal(true);
      setTimeout(callback, 1000);
    });
};

module.exports = steps;