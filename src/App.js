import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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

        this.setState({results: results});
      });
  }

  render() {
    const emojis = this.state.results.map((r, idx) =>
      <li key={idx}>
        <h2>{r.char} {r.name}</h2>
        <p>{r.keywords}</p>
      </li>);


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
          <ul className="emojis">
            {emojis}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
