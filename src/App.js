import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Result from './components/Result/Result';


class App extends Component {

  state = {
    results: []
  }

  //https://unpkg.com/emoji.json@11.0.0/emoji.json - to get the emojis

  componentDidMount () {
  axios.get('https://unpkg.com/emoji.json@11.0.0/emoji.json')
    .then(response => {
      const results = response.data;
      console.log("results: ===>", results)
      console.log("First Item: char => ", results[0].char)
      console.log("First Item: keywords => ", results[0].keywords)
    });
  }



  // function ShowResult(word){
  //   if word == keywords {
  //     console.log("Show list of emoji", results[i].char)
  //   }
  // }

  render() {
    const results = this.state.results.map(result => {
        return <Result
            keywords={result.keywords} />
      });



    return (
      <div className="App">
              <header>
                <nav className="nav">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/new-search">New Search</a></li>
                  </ul>
                </nav>
              </header>
                <section>
                <input type="text" className="text-box"></input>
                <button className="text-box">Search</button>
                  <p>list of emojis</p>
                  <p>{results}</p>
                  <Result />
                </section>
            </div>
    );
  }
}

export default App;
