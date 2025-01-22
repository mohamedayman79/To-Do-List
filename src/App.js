import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [todos , setTodos] = useState([]);
  const inputRef = useRef();

  const handelAddTodo = () =>{
  const text = inputRef.current.value ;
  const newItem = {completed : false , text}
  setTodos([...todos , newItem ]);
  console.log(setTodos)
  inputRef.current.value = "";
  }

  const handelAitem = (index)=> {
      const newTodos = [...todos]
      newTodos[index].completed = !newTodos[index].completed
      setTodos(newTodos);
  } 
  
  const handelDeleteAitem = (index)=>{

    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  
  return (
    <div className="App">
      <h2> To Do List  </h2>
     <div className='to-do-container'>
       <ul>
         {todos.map( ({text, completed}, index)=> {
             return (
     <div key={index} className='item'>
      <li className={completed ? "done" : ""} onClick={() => handelAitem(index)}> {text} </li>
      <span onClick={() => handelDeleteAitem(index)}> ❌ </span>
     </div>
             )
         } )}
       </ul>
       <input required ref={inputRef} placeholder='enter item ...' onKeyDown={(e) => e.key === "Enter" && inputRef.current.value && handelAddTodo()} />
       <button onClick={() => inputRef.current.value && handelAddTodo()}>
         add
       </button>
     </div>
    </div>
  );
}

export default App;
