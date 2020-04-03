import React, {Component} from 'react';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';
import './App.css';

class App extends Component {
 
  state={
    monsters: [],
    searchFeild: ''
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(rep=> rep.json())
    .then(user=> this.setState({monsters: user}))
  }

  handleChange =(e)=>{
    this.setState({searchFeild: e.target.value});
    
  }
  render(){
    const { monsters, searchFeild } = this.state;
    const filteredMonsters = monsters.filter(monster => 
          monster.name.toLowerCase().includes(searchFeild.toLowerCase())
      )
    return(
      <div className="App">     
        <h1>MONSTERS ROLODEX </h1>
        <SearchBox handleChange={this.handleChange}/>   
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
