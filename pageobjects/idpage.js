const { Key } = require('selenium-webdriver');
var BasePage = require('./basepage');

class IdPage extends BasePage {
    passField = 'input[name=pass]';
    idField = 'input[name=email]';
    enter_id(text) {
        //This will enter text into the id field
        this.enterTextByCss(this.idField, text);
        //this will send the enter key to the element
        this.enterTextByCss(this.idField, Key.RETURN);
    }
    enter_pass(text) {
        //This will enter text into the pass field
        this.enterTextByCss(this.passField, text);
        //this will send the enter key to the element
        this.enterTextByCss(this.passField, Key.RETURN);
    }
}
module.exports = new IdPage();