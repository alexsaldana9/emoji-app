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
    });
  }

  render() {
    // const results = this.state.posts.map(result => {
    //     return <Result
    //         key={result.id}
    //         title={result.title} />
    //   });

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
                </section>
            </div>
    );
  }
}

export default App;
