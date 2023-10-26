//add task
const addToList=(list,task)=>{
    if(task.trim()==""){
        return list;
    }
    return [...list,{text:task, completed:false}]
}
//mark with completed
const completed=(list,index)=>{
    list[index].completed=true;
    return list;
}

//delete from list
const deleteFromList=(list, index)=>{
    list.splice(index,1);
    return list;
}

module.exports={addToList,completed,deleteFromList};



