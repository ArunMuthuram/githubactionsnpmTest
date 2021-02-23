let add = require('../main/index');

describe("addTest",()=>{
    test('addTest',()=>{
        expect(add(1,2)).toBe(3);
    });
});