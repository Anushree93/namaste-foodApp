import {sum} from '../sum';

test("sum function should return sum of two numbers", ()=>{
    const result = sum(3,7);

    //Assertion
    expect(result).toBe(10);
});