const expect = require('chai').expect;

//Sample JUnit test
function sum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}
function multiply(a, b) {
    return a * b;
}
function subtract(a, b) {
    return a - b;
}

describe('#sum()', function () {

    //  logic before each test is run
    beforeEach(function () {

    })

    // test a functionality

    it('should add numbers', function () {
        const summe = sum([1,2,3,4,5,6,7]);
        expect(summe).to.equal(28);
    })
    it('shoud multiply numbers', function() {
        const result = multiply(10,5);
        expect(result).to.equal(50);
    })
    it('should substracting numbers',function()    {
        const result = subtract(20,5);
        expect(result).to.equal(15);
    })

});