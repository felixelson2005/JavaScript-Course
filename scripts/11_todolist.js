const todoList=[];

function addTodo(){
    const inputelement=document.querySelector('.js_input1');
    const name=inputelement.value;
    const Dateelement=document.querySelector('.js_date1');
    const duedate=Dateelement.value;
    const valueSet={
        name,
        duedate
    };
    console.log(`my value set ${valueSet}`);
    todoList.push(valueSet);
    addandsiplayTodo();
    inputelement.value='';
    Dateelement.value='';

}

function addandsiplayTodo(){
     let todoHtml='';
    for(let i=0;i<todoList.length;i++){
        const todoObject=todoList[i];
        const {name,duedate}=todoObject;
        const html=`<div>${name}</div>
                    <div>${duedate}</div>
                    <button onClick="
                    todoList.splice(${i},1); 
                    addandsiplayTodo();         
                    " class="css_delete_btn">Delete</button>
                    `;
        todoHtml +=html;

    }
    console.log(todoHtml);
    document.querySelector('.js_todo_list')
           .innerHTML=todoHtml; 
    
}




