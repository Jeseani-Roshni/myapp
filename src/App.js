import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { robots } from "./Components/robots";
import Cardlist from "./Components/Cardlist";
import SearchBox from "./Components/SearchBox";
import Scroll from "./Components/Scroll";
import ErrorBoundaries from "./ErrorBoundaries";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => {
        return r.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }
  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>LOADING</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundaries>
              <Cardlist robots={filteredRobots} />
            </ErrorBoundaries>
          </Scroll>
        </div>
      );
    }
    // console.log(filteredRobots);
  }
}

export default App;
