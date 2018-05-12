import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/SearchForm';
import SearchList from './components/SearchList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
      loader: false
    };
    
    this.updateList = this.updateList.bind(this);
    this.updateSpinner = this.updateSpinner.bind(this);
  }

  updateList(data) {
    this.setState({
      list: data
    });
  }

  updateSpinner(boolean) {
    this.setState({
      loader: boolean
    });
  }
  
  render() {
    return (
      <div className="searchPage">
        <div className="greeting">
          <h1 className="greeting-text">Welcome to Versium People Search</h1>
        </div>
        <div className="searchFields">
          <SearchForm updateList={this.updateList} updateSpinner={this.updateSpinner} />
        </div>
        <div className="searchResults">
        {
          (this.state.loader)
          ?<img src="spinner.gif" />
          :<SearchList list={this.state.list} />
        }
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));