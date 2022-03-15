const IdPage = require('../pageobjects/IdPage');
var baseurl = 'https://www.facebook.com/';
describe('Test login without password', function () {
    beforeEach(function () {
        //Enter actions performed before test
    });

    afterEach(function () {
        //Enter actions to be performed after test
    });

    it('POM Test Check', function () {
        //Enter test steps

        IdPage.go_to_url(baseurl);
        IdPage.enter_id('hoangmanhtoan');
    })
})

describe('Test login without email', function () {
    beforeEach(function () {
        //Enter actions performed before test
    });

    afterEach(function () {
        //Enter actions to be performed after test
    });

    it('POM Test Check', function () {
        //Enter test steps

        IdPage.go_to_url(baseurl);
        IdPage.enter_pass('abc12345');
    })
})

describe('Test login with true email and password', function () {
    beforeEach(function () {
        //Enter actions performed before test
    });

    afterEach(function () {
        //Enter actions to be performed after test
    });

    it('POM Test Check', function () {
        //Enter test steps

        IdPage.go_to_url(baseurl);
        IdPage.enter_id('hoangmanhtoan');
        IdPage.enter_pass('abc12345');
    })
})