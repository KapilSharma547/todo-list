
import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';


const App = () => {
  const [inputList, setInputList] = useState();
  const [Items, setItem] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItem((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('')
  };
  const deletItems = (id) => {
    console.log("deleted");

    setItem((oldItems) => {
      return oldItems.filter((arrElem, index) =>{
        return index !== id; 

      })
    })
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br></br>
          <input type="text" placeholder="Add a item"
            value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>

          <ol>

            {Items.map((itemVal, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deletItems}
                />
              );

            })}
          </ol>

        </div>
      </div>

    </>
  )

}

export default App;
