let add = require('../main/index');

describe("addTest",()=>{
    test('addTest',()=>{
        expect(add(1,2)).toBe(3);
    });
    test('addTestZero',()=>{
        expect(add(0,0)).toBe(0);
    });
});
