import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      results: []
    }

    this.clearHandler = this.clearHandler.bind(this);
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

        for (let i = 0; i < results.length; i++){
          //console.log("results.keywords ==>", results[i].keywords);
          let keywordString = results[i].keywords.split(" | ");
          console.log("STRING ===", keywordString);

          //if (searchWord == keywordString)
          var searchWord = "pilot";
          for (let j =0; j < keywordString.length; j++){
            if (searchWord === keywordString[j]) {
              console.log("SAME WORD => ", keywordString[j]);
            }
          }
        }


      });
  }

  clearHandler() {
    console.log("clicked clear");
    this.setState({results: []});
  }

  // keywordsToArray(keywords) {
  //   console.log("kewords to array", results.keywords);
  // }

  searchHandler() {
    console.log("clicked search");
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
          <input className="input" type="text"></input>
          <button className="input" onClick={this.searchHandler}>Search</button>
          <button className="input" onClick={this.clearHandler}>Clear</button>
        </section>
        <section>
          <ul className="emojis">
            {emojis}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
