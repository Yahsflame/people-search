import React from 'react';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      f_name: '',
      l_name: '',
      state_name: '',
      list: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit() {
    this.props.updateSpinner(true);
    
    fetch(`https://cors-anywhere.herokuapp.com/https://api.datafinder.com/qdf.php?service=phone&k2=9abbxna7d2b65ivia3p9vljs&cfg_maxrecs=100&d_first=${this.state.f_name}&d_last=${this.state.l_name}&d_state=${this.state.state_name}`)
      .then(response => response.json())
      .then(data => this.props.updateList(data['datafinder']['results']))
      .then(boolean => this.props.updateSpinner(false));
  }

  render() {
    return (
      <form id="searchForm" className="MyForm">
        <label>First Name</label>
        <input type="text" name="f_name" onChange={this.handleChange} />
        <label>Last Name</label>
        <input type="text" name="l_name" onChange={this.handleChange} />
        <label>State</label>
        <input type="text" name="state_name" onChange={this.handleChange} />
        <button onClick={this.handleSubmit} type="button">Submit</button>
      </form>
    );
  }
}

export default SearchForm;