import { useState } from 'react';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([
    { id : 1, content : "react를 배워봅시다." },
  ])
  
  const [content, setContent] = useState('');

  const contentChangeHandler = (event) => {
    setContent(event.target.value)
  }

  const addButtonHandler = () => {
    if (content !== '') {
      const newTodoList = {
        id: todoList.length + 1,
        content,
      }
      
      setTodoList([...todoList, newTodoList])
      setContent('');
    }
  }
  return (
    <div>
      <div className="inputArea">
        <input 
          value={content}
          onChange={contentChangeHandler}
        />
        <button className="addButton" onClick={addButtonHandler}>추가하기</button>
      </div>
        <div className="titleName">
        <h1>Todo List</h1>
        </div>
        <div className='todoList'>
          {todoList.map(function (item) {
            return (
              <div key={item.id} className='component-style'>
                {item.content}
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default App;
