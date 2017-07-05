const expect = require('expect');

const utils = require('./utils');


it('should add two numbers', () => {
    var res = utils.add(33,11);
    expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
    var res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
});

it('should expect some values', () => {
    expect(12).toNotBe(11);
    expect(12).toBe(12);
    expect({name:"Ricardo"}).toEqual({name:"Ricardo"});
    expect({name:"RicardoF"}).toNotEqual({name:"Ricardo"});
    expect([2,3,4]).toInclude(3);
    expect([2,3,4]).toExclude(5);
    expect({name:"Ricardo", age:32, location:"Rio de Janeiro"}).toInclude({age:32});
    expect({name:"Ricardo", age:32, location:"Rio de Janeiro"}).toExclude({age:33});

});

it ('Should verify if firt name and last name are set', () => {
    var user = {
        age: 32,
        location : "Rio de Janeiro"
    };
    var fullName = "Ricardo Fideles";
    var user = utils.setName(user, fullName);
    expect(user).toInclude(
        {   
            firstName: "Ricardo",
            lastName: "Fideles",
            age:32,
            location:"Rio de Janeiro"
        }
    );
    expect(user).toExclude({location:"EUA"});
});

it ('Should validate add async', (done) => {
    utils.asyncAdd(4,3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should asyncSquare a number', (done) => {
    utils.asyncSquare(3, (res) => {
         expect(res).toBe(9).toBeA('number');
         done();
    });
});



//Run custom scripts
//npm run test-watch