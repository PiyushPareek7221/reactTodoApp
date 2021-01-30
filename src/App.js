import React from 'react'
import './App.css'

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      newItem : '',
      list : []
    }
  }
  
  addItem(todoValue){
    if(todoValue!==''){
      const newItem = {
        id: Date.now(),
        value:todoValue,
        isDone:false
      }
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list:list, 
        newItem:""
      })
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item=> item.id!==id);
    this.setState({list:updatedList})
  }

  updateInput(input){
    this.setState({newItem:input});
  }

  render(){
    return (
      <div>
        <h1 className='app-title'>My ToDo App</h1>
        <div className='container'>
          Add an Item...
          <br/>
          <input type='text' className='input-text' placeholder="Write a Todo" required value={this.state.newItem} onChange={e=>this.updateInput(e.target.value)}/>
          <button onClick={()=>this.addItem(this.state.newItem)} disabled={!this.state.newItem.length} className='add-btn'>
            Add Todo
          </button>
          <div className='list'>
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <input type='checkbox' onChange={()=>{}} />
                    {item.value}
                    <button onClick={()=>{this.deleteItem(item.id)}} className='btn'>Delete</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App