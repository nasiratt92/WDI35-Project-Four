import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';


class NewsIndex extends React.Component {
  state = {}
  componentDidMount(){
    axios.get('api/news')
      .then(res => {
        this.setState({articles: res.data}, ()=> console.log('this.state', this.state));
      });
  }

  render() {
    return(
      <div>
        {this.state.articles && this.state.articles.map((article, i) =>{
          return (
            <a href={article.url} key={i} >
              <h2 className="title is-2">{article.title}</h2>
              <h4 className="title is-4">{article.description}</h4>
              <img src={article.urlToImage}></img>
              <small>Source:  {article.source.name}, {article.publishedAt}</small>
              <hr/>
            </a>
          );
        })}
      </div>
    );
  }
}


export default NewsIndex;
