var finnBanner = require('./index');

describe('finn-banner', function () {
    it('should define a global variable banner', function () {
        expect(global.banner).to.be.defined;
    });

    it('should define a function "plugin" on the global banner object', function () {
        expect(global.banner.plugin).to.be.a('function');
    });

    describe('registerPlugin', function () {
        it('should register a global function given a string', function () {
                var spy = sinon.spy();
                var key = 'foo';
                finnBanner.registerPlugin(key, spy);
                global.banner.plugin(key);
                expect(spy.called).to.be.true;
        });

        it('should register a global object given a string', function () {
            var value = 'foobar', key = 'foo';
            finnBanner.registerPlugin(key, {
                bar : value
            });

            var result = global.banner.plugin(key);
            expect(result.bar).to.equal(value);
        });
    });
});
