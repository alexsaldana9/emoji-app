import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Suggestions from './components/Suggestions';


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
        // console.log("results: ===>", results)
        // console.log("First Item: char => ", results[0].char)
        // console.log("First Item: keywords => ", results[0].keywords)

        this.setState({results: results});

        var options = [];
        for (let i = 0; i < results.length; i++){
          //console.log("results.keywords ==>", results[i].keywords);
          let keywordString = results[i].keywords.split(" | ");
          //console.log("STRING ===", keywordString);


          var searchWord = "pilot";
          for (let j =0; j < keywordString.length; j++){
            if (searchWord === keywordString[j]) {
              console.log("Search word => ", searchWord);
              console.log("SAME WORD => ", keywordString[j]);
              options.push(results[i]);
              console.log("Array of Options => ", options);
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

  handleInputChange = () => {
    this.setState({
      results: this.search.value
    }, () => {
      if (this.state.results && this.state.results.length > 1) {
        if (this.state.results.length % 2 === 0) {
          this.get()
        }
      }
    })
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
          <input
          className="input"
          type="text"
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.hanldeInputChange}
          />


          <button className="input" onClick={this.searchHandler}>Search</button>
          <button className="input" onClick={this.clearHandler}>Clear</button>
        </section>
        <section>
        <Suggestions results={this.state.results} />
          <ul className="emojis">
            {emojis}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
