const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App with spies', () => {
    var db = {
        saveUser : expect.createSpy()
    }
    app.__set__('db', db);
    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Ricardo', 32);
        expect(spy).toHaveBeenCalledWith('Ricardo', 32);
    });

    it('should call saveUser with user object', () => {
        var email = 'teste@gmail.com';
        var password = 123456;
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalled();
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});