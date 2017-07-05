const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server - Routes ', () => {

    describe('#GET', () => {
        describe('/', () => {
            it('It Should return hello world responde', (done) => {
                request(app)
                    .get('/')
                    .expect(404)
                    .expect((res) => {
                        expect(res.body).toInclude(
                            {
                                name: 'Todo app v1',
                                error: 'Page not found'
                            }
                        )
                    })
                    .end(done);
            });
        });

        describe('/users', () => {
            it('It Should return my user object in responde', (done) => {
                request(app)
                    .get('/users')
                    .expect(200)
                    .expect((res) => {
                        expect(res.body).toInclude(
                            {
                                firtname: 'Ricardo',
                                age: 32
                            }
                        )
                    })
                    .end(done);
            });
        });

    });

});
