const sum=require("../src/sum")
test('adds 1 + 2 to equal 3 ', () => {
    expect(sum(1,2)).toBe(3)
})

//truthy-null

test("truthy operators", ()=>{
    let name="software";
    let n=null;
    expect(n).toBeNull();
    expect(name).not.toBeNull();

    //name has a valid value
    expect(name).toBeTruthy();

    //fail - as null is non success
    expect(n).not.toBeTruthy();

    //pass- null treated as false or negative
    expect(n).toBeFalsy();

    //0- treated as false
    expect(0).toBeFalsy()
})


//Numeric

test("numeric operators",()=>{
    let num1=100;
    let num2=-20;
    let num3=0;

    //greater than

    expect(num1).toBeGreaterThan(10);

    //less than or equal

    expect(num2).toBeLessThanOrEqual(0);

    //greater than or equal

    expect(num3).toBeGreaterThanOrEqual(0);
})

//string matchers

test("String Matcher",()=>{
    let string1="software testing help";

    //test for success match
    expect(string1).toMatch(/test/);

    //test for failure match
    expect(string1).not.toMatch(/abc/);
})