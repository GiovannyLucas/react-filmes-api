import React from 'react';
import './ListarFilmes.css';

const ListaPessoas = props => {

    return(
        <div className="jumbotron row">
          <div className="col-md-3">            
            <img src={`https://image.tmdb.org/t/p/w185/${props.url}`}/>
          </div>
          <div className="col-md-4">
            <h3>{props.title}</h3>
            <h5><b>Data de Lançamento: </b>{props.lancamento}</h5>
            <h6>{props.descricao}</h6>
          </div>

          <div className="col-md-2 align-center">
            <center><h3>Score: </h3>
            <h2 className="score">{props.score}</h2>
            <a href={`https://www.themoviedb.org/movie/${props.id}`} className="btn btn-dark">Ver no site</a></center>
          </div>

        </div>  
            
    );


}


export default ListaPessoas;