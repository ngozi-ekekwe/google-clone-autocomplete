import React, { Component } from 'react';
import './App.css';

import jsonApi from './api';

class App extends Component {

  state = {
    jsonData: [],
    results: [],
    active: false
  }

  componentDidMount() {
    jsonApi().then((json) => {
      this.setState({
        jsonData: json
      })
    })
  }

  searchJson(word) {
    return this.state.jsonData.filter((data) => {
      if (data.name.toLowerCase().startsWith(word.toLowerCase())) {
        return data;
      }
    })
  }

  onInputChange = (e) => {
    let results = this.searchJson(e.target.value)
    if (e.target.value && results.length > 0) {
      this.setState({
        results,
        active: true
      })
    }
    else {
      this.setState({
        active: false
      })
    }
  }

  render() {
    const { results, active } = this.state;
    const classname = active ? "auto-complete-result-box active" : "auto-complete-result-box";

    return (
      <div className="App">
        <div className="page-header"><h1 className="name">Gooogle Clone</h1></div>
        <div className="auto-complete-box">
          <input placeholder="Type Here..." onChange={this.onInputChange}></input>

          <div className={classname}>
            {results.length > 0 && results.map((result) => {
              return (
                <div className="search-items">
                  {result.name}
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    )
  }
}


export default App;
