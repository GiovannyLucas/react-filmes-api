import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ListarFilmes from './Components/ListarFilmes';

class App extends Component {

state = {
    data: [],
    pesquisa: ''
}

componentDidMount(){
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6db402f2f23b80d07ac905f8a5d7d1ee&query=a`)
    .then(res => {
      this.setState({data: res.data.results});
    })
}


  handleInput = e => {
    this.setState({
      pesquisa: e.target.value
    });

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6db402f2f23b80d07ac905f8a5d7d1ee&query=${e.target.value}`)
    .then(res => {
      this.setState({data: res.data.results});
    })
    
  };


  render() { 
    
    return(
    <div>  
      <nav className="nav-movie">
          MOVIE SEARCH      
      </nav> 
      <nav className="nav-input">
        <center><input className="inputt" placeholder="Search" type="text" onChange={this.handleInput} /></center>
      </nav>

      
      {
        this.state.data.map(p => {
          return (<ListarFilmes title={p.title} lancamento={p.release_date} descricao={p.overview} score={p.vote_average} id={p.id} url={p.backdrop_path} />)
        })
      }
      

    </div>  
    )
          
  }

}

export default App;
