const {addToList, deleteFromList, completed}=require("../src/toDoApp");

test("add text to toDoList", ()=>{
    const list=[]
    const updatedList=addToList(list,"learn nodejs");
    expect(updatedList).toEqual([{text:"learn nodejs", completed:false}])
});

test("Mark as completed", ()=>{
    const list=[{text:"learn nodejs",completed:false}];
    const updatedList=completed(list,0);
    expect(updatedList[0].completed).toBe(true);
});

test("Delete From toDoList", ()=>{
    const list=[
        {text:"learn nodejs", completed:false},
        {text:"test with jest", completed:false}];
    const updatedList=deleteFromList(list,1)
    expect(updatedList).toEqual([{text:"learn nodejs", completed:false}])            
})