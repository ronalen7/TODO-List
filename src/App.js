import React, { useState } from 'react';
import Heading from './components/Heading';
import Description from './components/Description';
import Category from './components/Category';
import Date from './components/Date';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import './App.css';

function App() {
  const size = window.innerWidth;

  const [para, setPara] = useState(`Nothing to show! Use "Add Task" to add your tasks.`);

  const [desp, setDesp] = useState("");
  const [cat, setCat] = useState("");
  const [date, setDate] = useState("");

  const [todoList, setTodoList] = useState([]);

  function addToList() {
    if (!(desp && cat && date) && (size > 700)) {
      alert('Please fill all three fields');
    }
    else {
      setTodoList(function (oldList) {
        setPara("");
        return [...oldList, [desp, cat, date]];
      });
    }

    setDesp("");
    setCat("");
    setDate("");
  }

  function deleteTask(ind) {
    setTodoList(function (oldTodoListItem) {
      return oldTodoListItem.filter(function (todoListItem, index) {
        return index !== ind;
      })
    });
    if (todoList.length === 1) {
      setPara(`Nothing to show! Use "Add Task" to add your tasks.`);
    }
  }

  function sendDesp(event) {
    setDesp(event.target.value);
  }

  function sendCat(event) {
    setCat(event.target.value);
  }

  function sendDate(event) {
    setDate(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container" style={{
          border: "5px white solid",
          boxShadow: "-4px -4px 50px #2f7072, 4px 4px 50px #2f7072",
          backgroundColor: "white",
          margin: "auto",
          marginTop: "40px"
        }}>
          <Heading />
          <Description val={desp} onChangeEvent={sendDesp} />
          <Category val={cat} onChangeEvent={sendCat} />
          <Date val={date} onChangeEvent={sendDate} />
          <AddTask onClickEvent={addToList} />
          <Tasks stateArray={todoList} paraText={para} onClickEvent={deleteTask} />
        </div>
      </header>
    </div>
  );
}
export default App;
