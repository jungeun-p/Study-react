import React, {useState, useRef, useCallback} from 'react';
import './App.css';
import TodoTemplate from "./Components/TodoTemplate";
import TodoInsert from "./Components/TodoInsert";
import TodoList from "./Components/TodoList";

function createBulkTodos() {
  const array=[];
  for (let i=1; i<2500; i++) {
    array.push({
      id: i,
      text:`할 일${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () =>{
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current +=1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id=>{
      setTodos(todos.filter(todo=>todo.id!==id));
    },
    [todos],
  )

  const onToggle = useCallback(
    id => {
      setTodos(todos.map(todo=>
        todo.id===id? {...todo, checked: !todo.checked}:todo,
      ),
      )
    },
    [todos],
  )

  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
  );
}

export default App;