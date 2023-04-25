import './App.css';
import { useState } from 'react';
function App() {
  const[inputData,setInputData]= useState('')
  const [todos ,setTodos]=useState([])
  const [deletInput,setDeletInput]=useState([])
  const date = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[date.getDay()];
  
  const handleDelete=(id)=>{
   const deleteItems=todos.filter((items)=>items.id!==id)
   const showDelete= todos.filter((items)=>items.id===id)
    setTodos(deleteItems)
    setDeletInput([...deletInput,...showDelete])
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {dayName} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" placeholder="🖊️ Add item..."  value={inputData} onChange={(e)=>{setInputData(e.target.value) }}/>
       {inputData? <i className="fas fa-plus" onClick={(e)=>{setTodos([...todos,{id:date, text:inputData ,status:false}])
       setInputData('')
      }}></i>:""}
      </div>
      <div className="todos">
        {todos.map((value)=>{
          return(
            <div className="todo">
              <div className="left">
                <input type="checkbox" onChange={(e)=>{console.log(e.target.checked)
                setTodos(todos.map(value2=>{
                  if(value2.id===value.id){
                    value2.status=e.target.checked
                  }
                  return value2
                }))
                }} name="" id="" />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={()=>{handleDelete(value.id)}}></i>
              </div>
            </div>  
          )
        })}
        

        {todos.some(value => value.status) && (
          <div>
            <h3 style={{color:'white',paddingTop:'6px'}}>Active Task</h3>
            {todos.map((value2)=>{
              if(value2.status) {
                return(
                  <div className="input">
                    <p>{value2.text}</p>
                  </div>
                )
              }
              return null
            })}
          </div>
        )}
      </div>
     {
      deletInput.length>0 && (
        <div className="head">
          <h3 style={{color:'white'}}>Deleted Items</h3>
        
      {deletInput.map((value)=>{
          return(
            <div className="input">
              <p style={{textDecoration:"line-through"}}>{value.text}</p>
              <i className='fas fa-times' onClick={(e)=>setDeletInput(deletInput.filter((items)=>items.id!==value.id))}></i>
            </div>
          )
        })
      }
      </div>
     )}
    </div>
  );
}

export default App;